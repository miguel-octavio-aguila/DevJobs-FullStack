import { useRouter } from "../hooks/useRouter.jsx"

export function Link({ href, children, ...restOfProps }) {
    const { navigateTo } = useRouter()
    // this is a client side link, we don't want to reload the page
    const handleClick = (event) => {
        // prevent the default behavior of the link
        event.preventDefault()
        navigateTo(href)
    }

    return (
        // render the link with the href and the rest of the props
        <a href={href} {...restOfProps} onClick={handleClick}>
            {/* render the children of the link */}
            {children}
        </a>
    )
}