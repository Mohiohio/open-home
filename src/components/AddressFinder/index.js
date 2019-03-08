import React, { Component } from "react"
import { omit } from "lodash/object"
// import PropTypes from "prop-type"

class AddressFinder extends Component {
  static defaultProps = {
    options: {},
    key: "KG9W3QH8P76YFJT4MVCU",
    country: "NZ"
  }

  componentDidMount() {
    this.downloadAF(() => {
      this.withInputRef().then(el => {
        if (this.props.onRef) {
          this.props.onRef(el)
        }
        this.initAutocompleteWidget(el)
      })
    })
  }

  downloadAF = f => {
    var script = document.createElement("script")
    script.src = "https://api.addressfinder.io/assets/v3/widget.js"
    script.async = true
    script.onload = f
    document.body.appendChild(script)
  }

  initAutocompleteWidget = el => {
    const { options, onSelect, key, country } = this.props
    const widget = new global.AddressFinder.Widget(el, key, country, {
      address_params: {
        post_box: "0",
        // delivered: "1", best to omit this, or we don't get everything we can
        ...options
      }
    })
    widget.on("result:select", (fullAddress, metaData) => {
      const selected = new global.AddressFinder.NZSelectedAddress(
        fullAddress,
        metaData
      )
      onSelect(
        {
          address1: selected.address_line_1(),
          address2: selected.address_line_2(),
          suburb: selected.suburb(),
          city: selected.city(),
          postcode: selected.postcode(),
          lng: metaData.x,
          lat: metaData.y,
          fullAddress,
          id: metaData.dpid,
          pxid: metaData.pxid
        },
        { selected, metaData, fullAddress }
      )
    })
  }

  withInputRef = () => {
    return new Promise(resolve => {
      if (this.inputRef) {
        return resolve(this.inputRef)
      }
      setTimeout(() => resolve(this.withInputRef()), 100)
    })
  }

  render() {
    const props = omit(this.props, ["country", "options", "onSelect", "onRef"])
    return (
      <input
        ref={el => (this.inputRef = el)}
        type="text"
        placeholder="Search for address"
        {...props}
      />
    )
  }
}

export default AddressFinder
