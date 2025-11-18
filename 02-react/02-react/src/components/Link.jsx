export function Link({ href, children, ...restOfProps }) {
    // this is a client side link, we don't want to reload the page
    const handleClick = (event) => {
        // prevent the default behavior of the link
        event.preventDefault()

        // navigate to the new url
        window.history.pushState({}, '', href)
        // trigger the popstate event to update the url in the browser
        window.dispatchEvent(new PopStateEvent('popstate'))
    }

    return (
        // render the link with the href and the rest of the props
        <a href={href} {...restOfProps} onClick={handleClick}>
            {/* render the children of the link */}
            {children}
        </a>
    )
}