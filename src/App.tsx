import { useState } from 'react'

// Importe dos icones
import iconGithub from './assets/icon_github.svg'
import iconLinkedin from './assets/icon_linkedin.svg'
import iconReact from './assets/icon_react.svg'
import iconVite from './assets/icon_vite.svg'
import iconPython from './assets/icon_python.svg'
import iconFlask from './assets/icon_flask.svg'

// Importe dos componentes
import Triangle from './components/Triangle'
import Form from './components/Form'

// Importe do CSS 
import './App.css'

function App() {
  // Links para o github e linkedin
  const github:string = 'https://github.com/rzschrb'
  const linkedin:string = 'https://www.linkedin.com/in/ricardo-schreiber-94b9a020b/'

  // States para armazenar os valores dos lados do triângulo
  const [sideValueA, setSideValueA] = useState('');
  const [sideValueB, setSideValueB] = useState('');
  const [sideValueC, setSideValueC] = useState('');

  // Função para atualizar os valores dos lados do triângulo
  const onChangeTriangleSide = (side: string, sideValue: string) => {
    switch (side) {
      case 'a':
        setSideValueA(sideValue);
        break;
      case 'b':
        setSideValueB(sideValue);
        break;
      case 'c':
        setSideValueC(sideValue);
        break;
      default:
        break;
    }
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
            <Triangle side_a={sideValueA} side_b={sideValueB} hipo_c={sideValueC}/>
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
