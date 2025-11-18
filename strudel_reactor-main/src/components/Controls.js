import NavBar from "./ComponenetNav"
import {useState} from "react";


function Controls(){

    const [dNoteCounter, setDNoteCounter] = useState(0);

    return(
        <div className="controls-wrapper">
            <NavBar title="Instrument Controls"/>
            <div className="glass-light">
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Bass Control
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show"
                             data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Notes</span>
                                    </div>
                                    <input type="text" className="form-control" aria-label="Default"
                                           aria-describedby="inputGroup-sizing-default"/>
                                </div>

                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Bass Type Select</option>
                                    <option value="1">Acoustic</option>
                                    <option value="2">Synth Bass</option>
                                    <option value="3">Electric</option>
                                    <option value="3">Slap</option>
                                </select>
                                <div>
                                    <label htmlFor="customRange2" id="gainSelc" className="form-label">Gain range</label>
                                    <input type="range" className="form-range" min="0" max="10" id="customRange2"/>
                                    <button className="btn btn-primary">Add To Strudel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Synth Control
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse"
                             data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Notes</span>
                                    </div>
                                    <input type="text" className="form-control" aria-label="Default"
                                           aria-describedby="inputGroup-sizing-default"/>
                                </div>

                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Synth Type Select</option>
                                    <option value="1">Sawtooth</option>
                                    <option value="2">Square</option>
                                    <option value="3">Triangle</option>
                                    <option value="3">Sine</option>
                                </select>
                                <label htmlFor="customRange2" id="gainSelc" className="form-label">Gain range</label>
                                <input type="range" className="form-range" min="0" max="10" id="customRange2"/>
                                <button className="btn btn-primary">Add To Strudel</button>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Drum Control
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse"
                             data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Notes</span>
                                    </div>
                                    <input type="text" className="form-control" aria-label="Default"
                                           aria-describedby="inputGroup-sizing-default"/>
                                </div>
                                <p>Use drum sounds: bd, sd, hh, cp, oh, ch</p>

                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Drum Machine Select</option>
                                    <option value="1">RolandTR707</option>
                                    <option value="2">RolandTR808</option>
                                    <option value="3">RolandT9809</option>
                                </select>
                                <label htmlFor="customRange2" id="gainSelc" className="form-label">Gain range</label>
                                <input type="range" className="form-range" min="0" max="10" id="customRange2"/>
                                <button className="btn btn-primary">Add To Strudel</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

)
}

export default Controls;