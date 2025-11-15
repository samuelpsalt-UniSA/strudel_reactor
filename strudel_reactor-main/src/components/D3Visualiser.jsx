import NavBar from "./ComponenetNav"
import {useEffect, useState} from "react";

function D3Visualiser() {
    const [rngNumber, setRngNumber] = useState(0);
    const timeOut = 500;
    const maxValue = 60;

    /*
    useEffect(() => {
        const interval = setInterval(() => {
            setRngNumber(math.floor(Math.random() * maxValue));
        }, timeOut);

        return () => clearInterval(interval);
    })

    useEffect(() => {

        let tempArray = [...rngArray, rngNumber];
        if (tempArray.length > maxItems) {tempArray.shift()}
    })
    */




    return(
        <>
            <div className="D3-visualiser-wrapper">
                <NavBar title="D3 Visualiser"/>
                <div className="App container">
                    <h1>RNG OutPut: </h1>
                    <svg width="100%" height="100%"
                         className="border border-primary rounded p-2"></svg>
                </div>

            </div>
        </>

    )


}

export default D3Visualiser;