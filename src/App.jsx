import { useState } from 'react'
import {Home} from './components/Home'
import { NavBar } from './components/NavBar'
import '../src/assets/css/style.css'

function App() {

  return (
    <main>
      <section>
        <NavBar />
        <Home />
      </section>
    </main>
  )
}

export default App
