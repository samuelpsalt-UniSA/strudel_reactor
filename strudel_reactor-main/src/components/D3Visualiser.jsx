import NavBar from "./ComponenetNav"
import {useEffect, useState} from "react";
import * as d3 from "d3";

function D3Visualiser({ D3Input }) {

    const maxItems = 600;
    const timeOut = 500;
    //const maxValue = Math.Max();

    console.log(D3Input);




        return (
            <>
                <div className="D3-visualiser-wrapper">
                    <NavBar title="D3 Visualiser"/>
                    <div className="glass-light">
                        <svg></svg>
                    </div>

                </div>
            </>

        )

}

export default D3Visualiser;