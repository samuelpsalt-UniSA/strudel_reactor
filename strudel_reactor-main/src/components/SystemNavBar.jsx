import PlayButtons from "./PlayButtons";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";

export default function SystemNavBar({ourPlayButton, ourStopButton, onToggleEditor, isEditorVisible, onImportTune, onExportTune}){

    const buttonText = isEditorVisible ? "Hide Editor" : "Show Editor";

    const [importAlert, setImportAlert] = useState(false);

    const onImportClick = () => {
        onImportTune();
        setTimeout(() => setImportAlert(true), 3000);


        setTimeout(() => {
            setImportAlert(false);
        }, 10000);

    }

    const setImportAllertFalse = () => {
        setImportAlert(false);
    }



    return(
        <>
            <nav className="systemNavBar">
                <h1 className="navH2">Strudel REPL</h1>
                <div className="volumeWrapper">
                    <label htmlFor="customRange2" className="form-label">Volume Control</label>
                    <input type="range" className="form-range" min="0" max="5" id="customRange2"/>
                </div>

                <div className="systemNav">
                    <div className="systemNavItem1">
                        <button
                            className="btn btn-primary"
                            id="sticky-button"
                            onClick={onToggleEditor}>
                            {buttonText}
                        </button>
                        <button className="btn btn-primary" onClick={onImportClick}
                                id="sticky-button">
                            Import Tune
                        </button>
                        <button className="btn btn-primary"
                                onClick={onExportTune}
                                id="sticky-button">
                            Export Tune
                        </button>
                    </div>
                    <div className="systemNavItem2">
                        <PlayButtons playRef={ourPlayButton} stopRef={ourStopButton}/>
                    </div>
                </div>
            </nav>

            {importAlert && (
                <div className="alert alert-success alert-dismissible fade show" role="alert" id='importSuccessAlert'>
                    <strong>Tune Successfully Imported</strong>
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={setImportAllertFalse}></button>
                </div>
            )
            };

        </>

    )
}

