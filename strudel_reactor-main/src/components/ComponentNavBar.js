function ComponentNavBar({title, onToggleEditor}) {

    return (
        <nav className="componentNav">
            <p className="componentNavItem">{title}</p>
            <button
                className="componentNavButton"
                onClick={onToggleEditor}
            >Close ❌</button>
        </nav>
    )
}

export default ComponentNavBar;