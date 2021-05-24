import {DOMSelectors} from "./DOM";
import {keywords} from "keyword";

const listen = function ( {
    DOMSelectors.searchForm.addEventListener("submit",function(e) {
        e.preventDefault();
        const searchParams = DOMSelectors.searchArea.value;
    })
})