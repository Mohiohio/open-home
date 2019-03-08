import React, { useEffect, useRef } from "react"

const AddressFinder = ({
  key,
  country,
  onSelect,
  onRef,
  options,
  ...props
}) => {
  const inputRef = useRef(null)
  const downloadAF = f => {
    var script = document.createElement("script")
    script.src = "https://api.addressfinder.io/assets/v3/widget.js"
    script.async = true
    script.onload = f
    document.body.appendChild(script)
  }

  const initAutocompleteWidget = el => {
    const widget = new global.AddressFinder.Widget(el, key, country, {
      address_params: {
        post_box: "0",
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

  const withInputRef = () => {
    return new Promise(resolve => {
      if (inputRef.current) {
        return resolve(inputRef.current)
      }
      setTimeout(() => resolve(withInputRef()), 100)
    })
  }

  useEffect(() => {
    downloadAF(() => {
      withInputRef().then(el => {
        if (onRef) {
          onRef(el)
        }
        initAutocompleteWidget(el)
      })
    })
  }, [])

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Search for address"
      {...props}
    />
  )
}

AddressFinder.defaultProps = {
  options: {},
  key: "KG9W3QH8P76YFJT4MVCU",
  country: "NZ"
}

export default AddressFinder
