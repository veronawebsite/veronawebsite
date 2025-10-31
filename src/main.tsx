import { render } from 'preact'
import './style.css'
import { HomePage } from './components/HomePage'
import { SafetyInstructions } from './components/SafetyInstructions'
import Router from 'preact-router'

function App() {
  return (
    <Router>
      <HomePage path="/veronawebsite/" />
      <HomePage path="/" />
      <SafetyInstructions path="/veronawebsite/safety" />
      <SafetyInstructions path="/safety" />
    </Router>
  )
}

render(<App />, document.getElementById('app')!)
