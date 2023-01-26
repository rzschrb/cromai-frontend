import React, { useState, useEffect } from "react";
import "./Form.css"

// FromProps: Props para trocar os valores dos lados do triângulo
interface FormProps {
    onChangeTriangleSide: (side: string, sideValue: string) => void;
}

// Result: Interface para receber o resultado da requisição
export interface Result {
    id: string;
    response: string;
}

// Form: Componente para receber os valores dos lados do triângulo
const Form = ({
    onChangeTriangleSide,
  }: FormProps): JSX.Element => {
    // States para armazenar os valores dos lados do triângulo
    const [side_a, setSideA] = useState<string>("");
    const [side_b, setSideB] = useState<string>("");
    const [hipo_c, setHipoC] = useState<string>("");

    // State para armazenar o resultado da requisição
    const [result, setResult] = useState<Result>({ id: '', response: '' });

    // Função para enviar os valores dos lados do triângulo para o componente pai
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>, side: 'a' | 'b' | 'c') => {
        const inputValue = event.target.value;
        if (side === 'a') {
            if ((side_b === '' || hipo_c === '') && parseInt(inputValue) > 0) {
                setSideA(inputValue);
                onChangeTriangleSide('a', inputValue);
            } else {
                setSideA('');
            }
        } else if (side === 'b') {
            if ((side_a === '' || hipo_c === '') && parseInt(inputValue) > 0) {
                setSideB(inputValue);
                onChangeTriangleSide('b', inputValue);
            } else {
                setSideB('');
            }
        } else if (side === 'c') {
            if ((side_a === '' || side_b === '') && parseInt(inputValue) > 0) {
                setHipoC(inputValue);
                onChangeTriangleSide('c', inputValue);
            } else {
                setHipoC('');
            }
        }
    }

    // Função para resetar os valores dos lados do triângulo
    const resetValues = () => {
        setSideA("");
        setSideB("");
        setHipoC("");
    }

    // Função para enviar os valores dos lados do triângulo para o servidor
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetch(`https://flask-server-cromai.rzschrb.repl.co/calculate/${side_a != '' ? side_a : 0 }/${side_b != '' ? side_b : 0 }/${hipo_c != '' ? hipo_c : 0 }/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => response.json())
        .then((data) => {
            setResult(data);
            console.log(result);
        });
        resetValues();
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
            {result.response !== '' ? 
                <div className="form-result">
                    <div className="form-result-title">
                        <p>Resultado</p>
                    </div>
                    <div className="form-result-content">
                        <p>{result.response}</p>
                    </div>
                </div> 
            : null}
        </div>
    );
};

export default Form;