import {StrudelMirror} from '@strudel/codemirror';
import {evalScope} from '@strudel/core';
import {getAudioContext, initAudioOnFirstClick, registerSynthSounds, webaudioOutput} from '@strudel/webaudio';
import {transpiler} from '@strudel/transpiler';
import {stranger_tune} from "../tunes";
import {registerSoundfonts} from '@strudel/soundfonts';
import {useEffect, useRef, useState} from "react";
import StrudelNavBar from "./StrudelNavBar";


function StrudelReactor({ ourPlayButton, ourStopButton, isVisible, onToggleEditor, onImportTriggerReady,
                            onExportTriggerReady}){

    const ourEditorRoot = useRef();
    const editorRef = useRef(null);
    const fileInputRef = useRef(null);
    const [importPlay, setImportPlay] = useState(false);

    const stringForFileExport = useRef(null);

    let wrapperClass = `strudelWrapper ${isVisible ? '' : 'hidden'}`;


    const [currentTune, setCurrentTune] = useState(stranger_tune);


    useEffect(() => {
        //const canvas = ourCanvas.current;
        const editorRoot = ourEditorRoot.current;
        const playButton = ourPlayButton.current;
        const stopButton = ourStopButton.current;


        // to reset when importing new song input, also stops Codemirror duplicating for some reason
        editorRoot.innerHTML = '';

        const editor = new StrudelMirror({
            defaultOutput: webaudioOutput,
            getTime: () => getAudioContext().currentTime,
            transpiler,
            root: editorRoot,
            initialCode: currentTune,

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


        const handlePlay = () => editorRef.current.evaluate();
        console.log(editor.code);
        const handleStop = () => editorRef.current.stop();

        playButton.addEventListener('click', handlePlay);
        stopButton.addEventListener('click', handleStop);


    }, [ourPlayButton, ourStopButton]);

    useEffect(() => {
        if (editorRef.current.setCode) {
            editorRef.current.clear();
            editorRef.current.setCode(currentTune);
            stringForFileExport.current = currentTune;
            if (importPlay === true){
                editorRef.current.evaluate();
                wrapperClass = `strudelWrapper ${isVisible ? '' : 'hidden'}`;
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
            console.log(text);
            setCurrentTune(text);
            setImportPlay(true);
            console.log(importPlay);
        } else {
            console.error('error');
        }

    };


    const handleFileExport = () => {
        const editorCode = editorRef.current.code;

        const blob = new Blob([editorCode], { type: "application/javascript" });
        const fileName = prompt('Please enter a file name');
        const url = URL.createObjectURL(blob);


        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }


    return (
        <>
            <div className={wrapperClass}>
                <StrudelNavBar
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