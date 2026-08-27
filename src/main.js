import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'

const target = document.getElementById('app')

// Kontrollera om HTML elementet finns innan appen startas
if (!target) {
  throw new Error('No target element found')
}

// Starta appen om elementet finns
const app = mount(App, { target })

export default app
