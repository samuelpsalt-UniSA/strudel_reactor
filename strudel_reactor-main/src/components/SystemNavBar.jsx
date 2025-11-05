import PlayButtons from "./PlayButtons";
import {useState} from "react";



//const [strudelVisible, setstrudelVisible] = useState(false);

/*
const handleStrudel = (e) =>{
    e.stopPropagation();
    setstrudelVisible(true);
};
*/

export default function SystemNavBar({ourPlayButton, ourStopButton}){
    return(
        <nav className="systemNavBar">
            <h1 className="navH2" >Strudel Demo</h1>
            <button className="sticky-button">Show Editor</button>
            <PlayButtons playRef={ourPlayButton} stopRef={ourStopButton} />
        </nav>
    )
}

