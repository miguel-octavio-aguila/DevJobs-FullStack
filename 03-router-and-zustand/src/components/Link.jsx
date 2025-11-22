// we don't need this anymore because we are using react router
// import { useRouter } from "../hooks/useRouter.jsx"

import { Link as NavLink } from "react-router"

export function Link({ href, children, ...restOfProps }) {
    // const { navigateTo } = useRouter()
    // this is a client side link, we don't want to reload the page
    // const handleClick = (event) => {
    //     // prevent the default behavior of the link
    //     event.preventDefault()
    //     navigateTo(href)
    // }

    return (
        // render the link with the href and the rest of the props
        // this is called a straction pattern (with react router)
        <NavLink to={href} {...restOfProps}>
            {/* render the children of the link */}
            {children}
        </NavLink>
    )
}