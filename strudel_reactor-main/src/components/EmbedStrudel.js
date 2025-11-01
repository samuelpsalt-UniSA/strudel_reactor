
import embedStrudelComponent from '@strudel/embed';
import { stranger_tune } from "../tunes";

function EmbedStrudel() {
    <script src="https://unpkg.com/@strudel/embed@1.0.2"></script>
    return(
    <strudel-repl code={stranger_tune}></strudel-repl>
    )
}

export default EmbedStrudel;