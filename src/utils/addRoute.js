import { addFilter } from "./hooks"

export default function addRoute(compare, renderComponent) {
  addFilter("route", (routeComponent, location, context) => {
    if (routeComponent) return routeComponent
    const match =
      typeof compare === "function"
        ? compare(location)
        : compare === location.pathname

    return match ? renderComponent({ location, ...context }) : null
  })
}
