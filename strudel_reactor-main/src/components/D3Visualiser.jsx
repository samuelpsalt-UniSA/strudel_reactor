import NavBar from "./ComponenetNav"

function D3Visualiser() {
    return(
        <>
            <div className="D3-visualiser-wrapper">
                <NavBar title="D3 Visualiser"/>
                <script type="module" className="D3-visualiser-content">
                    import * as d3 from "https://cdn.isdelivr.net/npm/d3@7/+esm";
                    <p>test</p>
                </script>
            </div>
        </>

    )


}

export default D3Visualiser;