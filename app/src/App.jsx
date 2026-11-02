import { useState } from 'react'
import { destinatii as destinatiiInitiale } from './data/destinatii.js'
// 1. Aici am adăugat stergeDestinatie la importul din utils:
import { getNevizitate, totalZile, marcheazaVizitat, adaugaDestinatie, stergeDestinatie } from './utils/destinatii.js'

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

  function handleAdd(nouaDestinatie) {
    setDestinatii((curent) => adaugaDestinatie(curent, nouaDestinatie));
  }

  // 2. Aici am adăugat funcția nouă, chiar înainte de return:
  function handleDelete(id) {
    setDestinatii((curent) => stergeDestinatie(curent, id));
  }

  return (
    <main>
      <h1>City Explorer</h1>
      <Rezumat 
        total={nrTotal} 
        nevizitate={nrNevizitate} 
        zile={zileNevizitate} 
      />
      
      <AdaugareDestinatie onAdd={handleAdd} />
      
      <ListaDestinatii 
        destinatii={destinatii} 
        onToggle={handleToggle} 
        // 3. Aici transmitem comanda către listă:
        onDelete={handleDelete} 
      />
    </main>
  )
}