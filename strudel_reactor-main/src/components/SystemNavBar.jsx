import PlayButtons from "./PlayButtons";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SystemNavBar({ourPlayButton, ourStopButton, onToggleEditor, isEditorVisible, onImportTune, onExportTune}){

    const buttonText = isEditorVisible ? "Hide Editor" : "Show Editor";



    return(
        <>
            <nav className="systemNavBar">
                <h1 className="navH2">Strudel REPL</h1>
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

            <div className="alert alert-success alert-dismissible fade show" role="alert" id='importSuccessAlert'>
                <strong>File Successfully Imported</strong>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </>

    )
}

