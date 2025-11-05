import { StrudelMirror } from '@strudel/codemirror';
import { evalScope } from '@strudel/core';
import { drawPianoroll } from '@strudel/draw';
import { initAudioOnFirstClick } from '@strudel/webaudio';
import { transpiler } from '@strudel/transpiler';
import { stranger_tune } from "../tunes";
import console_monkey_patch, { getD3Data } from '../console-monkey-patch';
import { getAudioContext, webaudioOutput, registerSynthSounds } from '@strudel/webaudio';
import { registerSoundfonts } from '@strudel/soundfonts';
import {useEffect, useRef, useState} from "react";
import procButtons from "./ProcButtons";
import PlayButtons from "./PlayButtons";
import ProcButtons from "./ProcButtons";
import SystemNavBar from "./SystemNavBar";
import ComponentNavBar from "./ComponentNavBar";


function StrudelReactor({ ourPlayButton, ourStopButton, isVisible, onToggleEditor}){
    //const ourCanvas = useRef();
    const ourEditorRoot = useRef();
    const editorRef = useRef(null);

    useEffect(() => {
        //const canvas = ourCanvas.current;
        const editorRoot = ourEditorRoot.current;
        const playButton = ourPlayButton.current;
        const stopButton = ourStopButton.current;

        // if we can't find any of these, don't load
        if (!editorRoot || !playButton || !stopButton) {
            console.error("Could not find dom node");
            return;
        }

        // this worked idk
/*
        canvas.width = canvas.width * 2;
        canvas.height = canvas.height * 2;
        const drawContext = canvas.getContext('2d');
        const drawTime = [-2, 2]; // time window of drawn haps

*/
        const editor = new StrudelMirror({
            defaultOutput: webaudioOutput,
            getTime: () => getAudioContext().currentTime,
            transpiler,
            root: editorRoot,
            initialCode: stranger_tune,
            //drawTime,
           // onDraw: (haps, time) => drawPianoroll({ haps, time, ctx: drawContext, drawTime, fold: 0 }),
            prebake: async () => {
                initAudioOnFirstClick(); // needed to make the browser happy (don't await this here..)
                const loadModules = evalScope(
                    import('@strudel/core'),
                   //import('@strudel/draw'),
                    import('@strudel/mini'),
                    import('@strudel/tonal'),
                    import('@strudel/webaudio'),
                );
                await Promise.all([loadModules, registerSynthSounds(), registerSoundfonts()]);

            },
        });

        editorRef.current = editor;

        const handlePlay = () => editor.evaluate();
        const handleStop = () => editor.stop();

        playButton.addEventListener('click', handlePlay);
        stopButton.addEventListener('click', handleStop);


    }, [ourPlayButton, ourStopButton]);

    const wrapperClass = `strudelWrapper ${isVisible ? '' : 'hidden'}`;


    return (
        <>
            <div className={wrapperClass}>
                <ComponentNavBar
                    title={"Strudel Editor"}
                    onToggleEditor={onToggleEditor}
                    isEditorVisible={isVisible}
                />
                <div id="editor" ref={ourEditorRoot} className="strudelComponent"/>
            </div>
        </>
    )
}

export default StrudelReactor;

