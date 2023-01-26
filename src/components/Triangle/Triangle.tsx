import React, { useState, useEffect } from "react";
import "./Triangle.css"


interface TriangleProps {
    side_a: string;
    side_b: string;
    hipo_c: string;
  }

const Triangle = ({
    side_a,
    side_b,
    hipo_c,
  }: TriangleProps): JSX.Element => {

    return (
        <div className="triangle-wrapper">
            <div className="triangle">
                <div className="side-a">
                    <p className="side-a-label">Cateto A = {side_a ? <span>{side_a}</span> : <span>?</span>}</p>
                </div>
                <div className="side-b">
                    <p className="side-b-label">Cateto B = {side_b ? <span>{side_b}</span> : <span>?</span>}</p>
                </div>
                <div className="hipo-c">
                    <p className="hipo-c-label">Hipotenusa C = {hipo_c ? <span>{hipo_c}</span> : <span>?</span>}</p>
                </div>
            </div>
        </div>
    );
};

export default Triangle;