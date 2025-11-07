function PlayButtons(props) {
    const { playRef, stopRef } = props;

    return (
        <>
            <div>
                <button className="sticky-button" ref={playRef} id="play">Play</button>
                <button className="sticky-button" ref={stopRef} id="stop">Stop</button>
            </div>

        </>
    )
}

export default PlayButtons;