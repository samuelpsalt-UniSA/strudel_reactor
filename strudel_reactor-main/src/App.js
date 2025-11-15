import './App.css';
import React, { useRef } from "react";
import SystemNavBar from "./components/SystemNavBar";
import StrudelReactor from "./components/StrudelReactor";
import {useState} from "react";
import D3Visualizer from "./components/D3Visualiser";
import Controls from "./components/Controls";
import ToBeNamed from "./components/ToBeNamedComponent";


function App() {
    const playButtonRef = useRef(null);
    const stopButtonRef = useRef(null);
    const [isEditorVisible, setstrudelVisible] = useState(true);
    const [importAction, setImportAction] = useState(null);
    const [exportAction, setExportAction] = useState(null);

    const toggleEditorVisibility = () => {
        setstrudelVisible(prev => !prev);
    };

    return (
        <>
                <SystemNavBar
                    ourPlayButton={playButtonRef}
                    ourStopButton={stopButtonRef}
                    onToggleEditor={toggleEditorVisibility}
                    isEditorVisible={isEditorVisible}
                    onImportTune={importAction}
                    onExportTune={exportAction}
                />
            <StrudelReactor
                ourPlayButton={playButtonRef}
                ourStopButton={stopButtonRef}
                isVisible={isEditorVisible}
                onToggleEditor={toggleEditorVisibility}
                onImportTriggerReady={setImportAction}
                onExportTriggerReady={setExportAction}
            />
            <D3Visualizer />
            <Controls />
            <ToBeNamed />

        </>
    )
}

export default App;





