import { useState, useEffect } from 'react'
import './App.css'
import iconGithub from './assets/icon_github.svg'
import iconLinkedin from './assets/icon_linkedin.svg'
import iconReact from './assets/icon_react.svg'
import iconVite from './assets/icon_vite.svg'
import iconPython from './assets/icon_python.svg'
import iconFlask from './assets/icon_flask.svg'
import Triangle from './components/Triangle'
import Form from './components/Form'

function App() {
  const github:string = 'https://github.com/rzschrb'
  const linkedin:string = 'https://www.linkedin.com/in/ricardo-schreiber-94b9a020b/'

  const [aSideValue, setASideValue] = useState('');
  const [bSideValue, setBSideValue] = useState('');
  const [cSideValue, setCSideValue] = useState('');

  const onChangeTriangleSide = (side: string, sideValue: string) => {
    if(side === 'a') {
      setASideValue(sideValue);
    } else if (side === 'b') {
      setBSideValue(sideValue);
    } else if (side === 'c') {
      setCSideValue(sideValue);
    }
  }

  // create simple function to call a alert saying hello world
  const helloWorld = () => {
    console.log("Hello")
  }

  return (
    <div className="App">
      <div className='side-panel'>
        <div className='side-title'>
          <p className='title'>SPACE CROMAI CALCULATOR</p>
        </div>
        <div className='anchors'>
          <a className='anchor-github' href={github} target="_blank">
            <img className='icon-github' src={iconGithub}></img>
          </a>
          <a className='anchor-linkedin' href={linkedin} target="_blank">
            <img className='icon-linkedin' src={iconLinkedin}></img>
          </a>
        </div>
      </div>
      <div className='content-wrapper'>
        <div className='content'>
          <div className='form-container'>
            <p className='form-title'>Qual os valores que você deseja calcular Pitágoras?</p>
            <Form onChangeTriangleSide={onChangeTriangleSide}/>
          </div>
          <div className='triangle-container'>
            <Triangle side_a={aSideValue} side_b={bSideValue} hipo_c={cSideValue}/>
          </div>
        </div>
        <div className='footer'>
          <div className='stack'>
            <img className='icon-stack' src={iconReact}></img>
            <img className='icon-stack' src={iconVite}></img>
            <img className='icon-stack' src={iconPython}></img>
            <img className='icon-stack' src={iconFlask}></img>
          </div>
          <p className='footer-label'>Desenvolvido por Ricardo Schreiber</p>
        </div>
      </div>
    </div>
  )
}

export default App
