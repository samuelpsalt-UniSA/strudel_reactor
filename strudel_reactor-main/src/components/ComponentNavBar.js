

function ComponentNavBar({title}) {
    return (
        <nav className="componentNav">
            <p className="componentNavItem">{title}</p>
            <button className="componentNavButton">Close X</button>
        </nav>
    )
}

export default ComponentNavBar;