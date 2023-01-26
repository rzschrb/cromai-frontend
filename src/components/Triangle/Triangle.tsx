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

    const truncateStr = (text: string, limit: number): string => {
        if (text.length > limit) {
          return text.substring(0, limit) + "...";
        }
        return text;
    };

    return (
        <div className="triangle-wrapper">
            <div className="triangle">
                <div className="side-a">
                    <p className="side-a-label">Cateto A = {side_a ? <span>{truncateStr(side_a, 10)}</span> : <span>?</span>}</p>
                </div>
                <div className="side-b">
                    <p className="side-b-label">Cateto B = {side_b ? <span>{truncateStr(side_b, 10)}</span> : <span>?</span>}</p>
                </div>
                <div className="hipo-c">
                    <p className="hipo-c-label">Hipotenusa C = {hipo_c ? <span>{truncateStr(hipo_c, 10)}</span> : <span>?</span>}</p>
                </div>
            </div>
        </div>
    );
};

export default Triangle;