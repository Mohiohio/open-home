import { useEffect, useState } from "react"
import createHistory from "history/createBrowserHistory"
const history = createHistory()

const trim = url => url.replace(/^\/|\/$/g, "")

const useRouter = (initial = "") => {
  const [route, setRoute] = useState(initial)

  useEffect(() => {
    const { pathname, search } = new URL(route, window.location.href)
    if (window.location.pathname !== pathname) {
      history.push(pathname)
      setRoute(trim(document.location.pathname))
    } else if (window.location.search !== search) {
      history.replace(pathname + search)
    }
  }, [route])

  useEffect(() => {
    window.onpopstate = function historyChange(ev) {
      if (ev.type === "popstate") {
        setRoute(trim(document.location.pathname))
      }
    }
    setRoute(trim(document.location.pathname))
  }, [])

  return [route, setRoute]
}

export default useRouter
