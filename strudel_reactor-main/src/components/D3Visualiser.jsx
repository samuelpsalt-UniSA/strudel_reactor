import NavBar from "./ComponenetNav"
import {useEffect, useState} from "react";
import * as d3 from "d3";

function D3Visualiser({ D3Input }) {

    const maxItems = 600;
    const timeOut = 500;
    //const maxValue = Math.Max();

    const [items, setItems] = useState([]);

    function logToNum(input){
        if (!input) {return 0};
        var stringArray = input.split(/(\s+)/);

        for (const item of stringArray){
            if  (item.startsWith('gain')){
                let val = item.substring(5)
                return Number(val)
            }
        }
        return 0;
    }

    useEffect(() => {
        setItems(D3Input)
    }, [D3Input]);




        return (
            <>
                <div className="D3-visualiser-wrapper">
                    <NavBar title="D3 Visualiser"/>
                    <div className="glass-light">
                        <svg></svg>
                        <p color={"white"}>Param Count: {items}</p>
                    </div>

                </div>
            </>

        )

}

export default D3Visualiser;