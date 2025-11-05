import PlayButtons from "./PlayButtons";
import {useState} from "react";



//const [strudelVisible, setstrudelVisible] = useState(false);

/*
const handleStrudel = (e) =>{
    e.stopPropagation();
    setstrudelVisible(true);
};
*/

export default function SystemNavBar({ourPlayButton, ourStopButton, onToggleEditor, isEditorVisible}){

    const buttonText = isEditorVisible ? "Hide Editor" : "Show Editor";

    return(
        <nav className="systemNavBar">
            <h1 className="navH2" >Strudel Demo</h1>
            <button
                className="sticky-button"
                onClick={onToggleEditor}>
                {buttonText}
            </button>
            <PlayButtons playRef={ourPlayButton} stopRef={ourStopButton} />
        </nav>
    )
}

