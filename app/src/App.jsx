import { useState } from 'react'
import { destinatii as destinatiiInitiale } from './data/destinatii.js'
import { getNevizitate, totalZile, marcheazaVizitat, adaugaDestinatie } from './utils/destinatii.js'

import Rezumat from './components/Rezumat.jsx'
import AdaugareDestinatie from './components/AdaugareDestinatie.jsx'
import ListaDestinatii from './components/ListaDestinatii.jsx'
import './App.css'

export default function App() {
  const [destinatii, setDestinatii] = useState(destinatiiInitiale)

  const nrTotal = destinatii.length;
  const nevizitateArray = getNevizitate(destinatii);
  const nrNevizitate = nevizitateArray.length;
  const zileNevizitate = totalZile(nevizitateArray);

  function handleToggle(id) {
    setDestinatii((curent) => marcheazaVizitat(curent, id));
  }

  // Funcția care se apelează când formularul trimite o destinație nouă
  function handleAdd(nouaDestinatie) {
    setDestinatii((curent) => adaugaDestinatie(curent, nouaDestinatie));
  }

  return (
    <main>
      <h1>City Explorer</h1>
      <Rezumat 
        total={nrTotal} 
        nevizitate={nrNevizitate} 
        zile={zileNevizitate} 
      />
      
      {/* Folosim noul nume al componentei */}
      <AdaugareDestinatie onAdd={handleAdd} />
      
      <ListaDestinatii 
        destinatii={destinatii} 
        onToggle={handleToggle} 
      />
    </main>
  )
}