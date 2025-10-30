import './App.css';
import {useEffect, useRef, useState} from "react";
import { StrudelMirror } from '@strudel/codemirror';
import { evalScope } from '@strudel/core';
import { drawPianoroll } from '@strudel/draw';
import { initAudioOnFirstClick } from '@strudel/webaudio';
import { transpiler } from '@strudel/transpiler';
import { getAudioContext, webaudioOutput, registerSynthSounds } from '@strudel/webaudio';
import { registerSoundfonts } from '@strudel/soundfonts';
import { stranger_tune } from './tunes';
import console_monkey_patch, { getD3Data } from './console-monkey-patch';
import DJControls from './components/DJControls';
import PlayButtons from "./components/PlayButtons";
import ProcButtons from "./components/ProcButtons";
import ProcessTextInput from "./components/ProcessTextInput";
import Reactor from "./components/Reactor";
import NavBar from "./components/NavBar";




function App() {

    return (
        <>
            <NavBar />
            <div className="App">
                <h2 className="textToStyle">Strudel Demo</h2>
                <main>

                    <div className="container-fluid">
                        <ProcButtons />
                        <PlayButtons />
                        <div className="row">
                            <ProcessTextInput/>
                            <div className="col-md-4">

                                <nav>

                                </nav>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8" style={{ maxHeight: '50vh', overflowY: 'auto' }}>
                                <div id="editor" />
                                <div id="output" />
                            </div>
                            <div className="col-md-4">
                                <DJControls />
                            </div>
                        </div>
                    </div>
                    <canvas id="roll"></canvas>
                </main >
            </div >
            );
        </>
    )

}

export default App;


