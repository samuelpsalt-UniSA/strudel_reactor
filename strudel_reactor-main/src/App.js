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


function App() {
    const playButtonRef = useRef(null);
    const stopButtonRef = useRef(null);

    const [strudelVisible, setstrudelVisible] = useState(true);

    const handleStrudel = (e) =>{
        e.stopPropagation();
        setstrudelVisible(true);
    };


    return (
        <>
            <div>
                <SystemNavBar
                    ourPlayButton={playButtonRef}
                    ourStopButton={stopButtonRef}
                />
                <main>
                    <div className="container-fluid">
                        <div className="row">

                            <div className="col-md-4">

                            </div>
                        </div>
                        <div className="row">
                            { strudelVisible && <StrudelReactor
                                    ourPlayButton={playButtonRef}
                                    ourStopButton={stopButtonRef}/>}

                            <div className="col-md-4">

                            </div>
                        </div>
                    </div>

                </main >
            </div >
        </>
    )
}

export default App;





