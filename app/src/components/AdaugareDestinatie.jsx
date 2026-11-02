import { useState } from 'react';

export default function AdaugareDestinatie({ onAdd }) {
  const [oras, setOras] = useState('');
  const [tara, setTara] = useState('');
  const [zile, setZile] = useState('');

  function handleSubmit(event) {
    event.preventDefault(); // Previne reîncărcarea paginii

    // Dacă vreun câmp important e gol, ne oprim
    if (!oras || !tara || !zile) return;

    // Creăm obiectul cu noua destinație
    const nouaDestinatie = {
      id: crypto.randomUUID(),
      oras: oras,
      tara: tara,
      zile: Number(zile), // Convertim textul în număr
      vizitat: false,
    };

    // Trimitem destinația la părinte
    onAdd(nouaDestinatie);

    // Golim formularul
    setOras('');
    setTara('');
    setZile('');
  }

  return (
    <form className="formular" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Oraș"
        value={oras}
        onChange={(e) => setOras(e.target.value)}
      />
      <input
        type="text"
        placeholder="Țară"
        value={tara}
        onChange={(e) => setTara(e.target.value)}
      />
      <input
        type="number"
        placeholder="Zile"
        min="1"
        value={zile}
        onChange={(e) => setZile(e.target.value)}
      />
      <button type="submit">Adaugă</button>
    </form>
  );
}