import PlayButtons from "./PlayButtons";

export default function SystemNavBar({ourPlayButton, ourStopButton}){
    return(
        <nav>
            <h1 className="navH2" >Strudel Demo</h1>
            <PlayButtons playRef={ourPlayButton} stopRef={ourStopButton} />
        </nav>
    )
}

