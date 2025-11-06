import { StrudelMirror } from '@strudel/codemirror';
import { evalScope } from '@strudel/core';
import { initAudioOnFirstClick } from '@strudel/webaudio';
import { transpiler } from '@strudel/transpiler';
import { stranger_tune } from "../tunes";
import console_monkey_patch, { getD3Data } from '../console-monkey-patch';
import { getAudioContext, webaudioOutput, registerSynthSounds } from '@strudel/webaudio';
import { registerSoundfonts } from '@strudel/soundfonts';
import {useEffect, useRef, useState} from "react";
import ComponentNavBar from "./ComponentNavBar";



function StrudelReactor({ ourPlayButton, ourStopButton, isVisible, onToggleEditor, onImportTriggerReady,
onExportTriggerReady}){
    //const ourCanvas = useRef();
    const ourEditorRoot = useRef();
    const editorRef = useRef(null);
    const fileInputRef = useRef(null);
    const [importPlay, setImportPlay] = useState(false);


    const [currentTune, setCurrentTune] = useState(stranger_tune);

   // let loadedTune = stranger_tune;

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
        // to reload when importing new song input, also stops Codemirror duplicating for some reason
         editorRoot.innerHTML = '';

         const editor = new StrudelMirror({
            defaultOutput: webaudioOutput,
            getTime: () => getAudioContext().currentTime,
            transpiler,
            root: editorRoot,
            initialCode: currentTune,
            //drawTime,
           // onDraw: (haps, time) => drawPianoroll({ haps, time, ctx: drawContext, drawTime, fold: 0 }),
            prebake: async () => {
                initAudioOnFirstClick(); // needed to make the browser happy (don't await this here..)
                const loadModules = evalScope(
                    import('@strudel/core'),
                    import('@strudel/draw'),
                    import('@strudel/mini'),
                    import('@strudel/tonal'),
                    import('@strudel/webaudio'),
                );
                await Promise.all([loadModules, registerSynthSounds(), registerSoundfonts()]);


            },
        });

        editorRef.current = editor;


        const handlePlay = () => editor.evaluate();
        console.log(editor.code);
        const handleStop = () => editor.stop();

        playButton.addEventListener('click', handlePlay);
        stopButton.addEventListener('click', handleStop);


    }, [ourPlayButton, ourStopButton]);

    useEffect(() => {
        if (editorRef.current.setCode) {
            editorRef.current.clear();
            editorRef.current.setCode(currentTune);
            if (importPlay === true){
                editorRef.current.evaluate();
            }

        }
    }, [currentTune]);


    useEffect(() => {
        if (onImportTriggerReady) {
            onImportTriggerReady(() => triggerFileInput);

        }
        if (onExportTriggerReady) {
            onExportTriggerReady(() => handleFileExport);
        }

    }, []);



    const triggerFileInput = () => {
        fileInputRef.current?.click();
    };

    const handleFileImport = async (event) => {
        const file = event.target.files[0];


            const text = await file.text();
            console.log(text);


            if (text.trim()) {
                console.log('tune load');
                setCurrentTune(text);
                setImportPlay(true);
                console.log(importPlay);
            } else {
                console.error('error');
            }

    };


    const handleFileExport = () => {
        const result = currentTune;
        const customUserText = prompt("Name Your File")
        const blob = new Blob([currentTune], { type: "application/javascript" });
        const url = URL.createObjectURL(blob);


        const link = document.createElement('a');
        link.href = url;
        link.download = customUserText;
        document.body.appendChild(link); // Append to body to make it clickable in some browsers
        link.click();
        document.body.removeChild(link); // Clean up
        URL.revokeObjectURL(url);
    }



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

                <input
                    ref={fileInputRef}
                    type="file"
                    accept=".js,.mjs, .json"
                    onChange={handleFileImport}
                    style={{ display: 'none' }}
                />
            </div>
        </>
    )
}

export default StrudelReactor;

