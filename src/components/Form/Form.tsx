import React, { useState, useEffect } from "react";
import "./Form.css"


interface FormProps {
    onChangeTriangleSide: (side: string, sideValue: string) => void;
}

export interface Result {
    id: string;
    response: string;
}

let result: Result;

const Form = ({
    onChangeTriangleSide,
  }: FormProps): JSX.Element => {
    const [side_a, setSideA] = useState<string>("");
    const [side_b, setSideB] = useState<string>("");
    const [hipo_c, setHipoC] = useState<string>("");

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>, side: 'a' | 'b' | 'c') => {
        const inputValue = event.target.value;
        if (side === 'a') {
            (side_b === '' || hipo_c === '') && parseInt(inputValue) > 0 ? setSideA(inputValue) : setSideA('');
            onChangeTriangleSide('a', inputValue);
        } else if (side === 'b') {
            (side_a === '' || hipo_c === '') && parseInt(inputValue) > 0 ? setSideB(inputValue) : setSideB('');
            onChangeTriangleSide('b', inputValue);
        } else if (side === 'c') {
            (side_a === '' || side_b === '') && parseInt(inputValue) > 0 ? setHipoC(inputValue) : setHipoC('');
            onChangeTriangleSide('c', inputValue);
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetch(`https://flask-server-cromai.rzschrb.repl.co/calculate/${side_a != '' ? side_a : 0 }/${side_b != '' ? side_b : 0 }/${hipo_c != '' ? hipo_c : 0 }/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => response.json())
        .then(({id, response}) => {
            result = {id, response};
            console.log(result);
        });
    }

    return (
        <div className="form-wrapper">
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <div className="form-group-label">
                        <label htmlFor="side_a">Cateto A</label>
                    </div>
                    <input type="text" id="side_a" name="side_a" value={side_a} onChange={(e) => handleOnChange(e, 'a')} placeholder="Digite o valor do cateto A"/>
                </div>
                <div className="form-group">
                    <div className="form-group-label">
                        <label htmlFor="side_b">Cateto B</label>
                    </div>
                    <input type="text" id="side_b" name="side_b" value={side_b} onChange={(e) => handleOnChange(e, 'b')} placeholder="Digite o valor do cateto B"/>
                </div>
                <div className="form-group">
                    <div className="form-group-label">
                        <label htmlFor="hipo_c">Hipotenusa C</label>
                    </div>
                    <input type="text" id="hipo_c" name="hipo_c" value={hipo_c} onChange={(e) => handleOnChange(e, 'c')} placeholder="Digite o valor da hipotenusa C"/>
                </div>
                <button className="submitButton" type="submit">Calcular</button>
            </form>
        </div>
    );
};

export default Form;