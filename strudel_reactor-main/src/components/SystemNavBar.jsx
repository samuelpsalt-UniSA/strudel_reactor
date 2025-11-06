import PlayButtons from "./PlayButtons";
import {useState} from "react";




/*
const handleStrudel = (e) =>{
    e.stopPropagation();
    setstrudelVisible(true);
};
*/

export default function SystemNavBar({ourPlayButton, ourStopButton, onToggleEditor, isEditorVisible, onImportTune, onExportTune}){

    const buttonText = isEditorVisible ? "Hide Editor" : "Show Editor";

    return(
        <nav className="systemNavBar">
            <h1 className="navH2">Strudel Demo</h1>
            <div className="systemNav">
                <div className="systemNavItem1">
                    <button
                        className="sticky-button"
                        onClick={onToggleEditor}>
                        {buttonText}
                    </button>
                    <button onClick={onImportTune}
                            className="sticky-button">
                        Import Tune
                    </button>
                    <button onClick={onExportTune}
                            className="sticky-button">
                        Export Tune
                    </button>
                </div>
                <div className="systemNavItem2">
                    <PlayButtons playRef={ourPlayButton} stopRef={ourStopButton}/>
                </div>
            </div>
        </nav>
    )
}

