import NavBar from "./ComponenetNav"
import {useEffect, useState} from "react";

function D3Visualiser({ D3Input }) {

    useEffect(() => {
        console.log('D3Input updated:', D3Input);
    }, [D3Input]);




        return (
            <>
                <div className="D3-visualiser-wrapper">
                    <NavBar title="D3 Visualiser"/>
                    <div className="App container">
                        <h1>RNG OutPut: ()</h1>
                        <svg width="100%" height="100%"
                             className="border border-primary rounded p-2"></svg>
                    </div>

                </div>
            </>

        )

}

export default D3Visualiser;