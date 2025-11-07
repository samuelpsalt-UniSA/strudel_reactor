function StrudelNavBar({onToggleEditor}) {

    return (
        <nav className="componentNav">
            <p className="componentNavItem">Strudel Editor</p>
            <button
                className="componentNavButton"
                onClick={onToggleEditor}
            >Close ❌</button>
        </nav>
    )
}

export default StrudelNavBar;