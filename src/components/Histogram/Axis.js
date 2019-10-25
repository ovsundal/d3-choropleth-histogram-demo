import * as d3 from "d3";
import D3blackbox from "../D3blackbox";
import {useD3} from 'd3blackbox';
import React from "react";

const Axis = D3blackbox(function() {
    const axis = d3
        .axisLeft()
        .tickFormat(d => `${d3.format(".2s")(d)}`)
        .scale(this.props.scale)
        .ticks(this.props.data.length);

    d3.select(this.anchorRef.current).call(axis);
});

// does not work
// function Axis({x, y, scale, data}) {
//     const anchorRef = useD3(function (anchorRef) {
//
//         const axis = d3
//             .axisLeft()
//             .tickFormat(d => `${d3.format(".2s")(d)}`)
//             .scale(scale)
//             .ticks(data.length);
//
//         d3.select(anchorRef.current).call(axis);
//     });
//
//     return <g transform={`translate(${x}, ${y})`} ref={anchorRef} />;
// }

export default Axis;
