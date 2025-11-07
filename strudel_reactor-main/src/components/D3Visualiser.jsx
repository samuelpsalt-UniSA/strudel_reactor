import NavBar from "./ComponenetNav"

function D3Visualiser() {
    return(
        <>
        <NavBar
            title="D3 Visualiser"/>
            <script type="module">
                import * as d3 from "https://cdn.isdelivr.net/npm/d3@7/+esm";
                <p>test</p>
            </script>
        </>

    )


}

export default D3Visualiser;