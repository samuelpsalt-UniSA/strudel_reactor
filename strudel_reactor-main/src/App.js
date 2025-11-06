import './App.css';
import { useEffect, useRef } from "react";
import { StrudelMirror } from '@strudel/codemirror';
import { evalScope } from '@strudel/core';
import { drawPianoroll } from '@strudel/draw';
import { initAudioOnFirstClick } from '@strudel/webaudio';
import { transpiler } from '@strudel/transpiler';
import { getAudioContext, webaudioOutput, registerSynthSounds } from '@strudel/webaudio';
import { registerSoundfonts } from '@strudel/soundfonts';
import { stranger_tune } from './tunes';
import console_monkey_patch, { getD3Data } from './console-monkey-patch';
import procButtons from "./components/ProcButtons";
import playButtons from "./components/PlayButtons";
import SystemNavBar from "./components/SystemNavBar";
import StrudelReactor from "./components/StrudelReactor";
import EmbedStrudel from "./components/EmbedStrudel";
import {useState} from "react";
import RandomQuoteGenerator from "./components/NewComponent";


function App() {
    const playButtonRef = useRef(null);
    const stopButtonRef = useRef(null);

    const [isEditorVisible, setstrudelVisible] = useState(true);


    const toggleEditorVisibility = () => {
        setstrudelVisible(prev => !prev);
    };

    /*
    const handleStrudel = (e) =>{
        e.stopPropagation();
        setstrudelVisible(true);
    };
    */



    return (
        <>
                <SystemNavBar
                    ourPlayButton={playButtonRef}
                    ourStopButton={stopButtonRef}
                    onToggleEditor={toggleEditorVisibility}
                    isEditorVisible={isEditorVisible}
                />
                <main>
                        <div className="row">

                            <div className="col-md-4">
                                <StrudelReactor
                                    ourPlayButton={playButtonRef}
                                    ourStopButton={stopButtonRef}
                                    isVisible={isEditorVisible}
                                    onToggleEditor={toggleEditorVisibility}
                                />
                               
                            </div>
                        </div>

                </main >
        </>
    )
}

export default App;





