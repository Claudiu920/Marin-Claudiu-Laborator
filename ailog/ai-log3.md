# AI Log - Laboratorul 3: Componente React, props și state

## Rezumat
În cadrul acestei etape, asistentul AI a fost utilizat drept *pair programmer* pentru ghidarea implementării interfeței aplicației "City Explorer" cu React. Interacțiunea a vizat restructurarea CSS-ului, crearea componentelor vizuale statice, adăugarea stării (state) pentru interactivitate și construirea unui formular pentru adăugarea de noi elemente, respectând cerințele din îndrumar.

---

## Jurnal de Prompt-uri și Răspunsuri

### 1. Planificarea etapei și configurarea inițială
* **Prompt utilizator**: *"sunt la laboratorul 3 si vreau sa ma ajuti, sa-mi explici ce trebuie sa fac si dupa sa ma ajuti sa fac"* [referință îndrumar PDF Laboratorul 3].
* **Răspuns AI**: Sintetizarea obiectivelor laboratorului în 4 pași clari: (1) curățenia CSS, (2) crearea componentelor `DestinatieCard` și `ListaDestinatii`, (3) adăugarea stării și a rezumatului, (4) implementarea formularului. Solicitarea confirmării dacă se continuă pe proiectul din laboratorul anterior.

### 2. Resetarea stilurilor și crearea componentelor de bază (Exercițiul 1)
* **Prompt utilizator**: *"am proiectul din laboratorul 2"* și *"hai sa trecem la pasul 2"*.
* **Răspuns AI**: Oferirea codului CSS pentru resetarea și aranjarea paginii (`index.css` și `App.css`). Furnizarea codului pentru componentele structurale (`DestinatieCard.jsx` și `ListaDestinatii.jsx`) și a instrucțiunilor de integrare în `App.jsx`, alături de stilizarea CSS tip grilă.

### 3. Depanarea erorilor de rulare a serverului Vite
* **Prompt utilizator**: *"care era comanda pentru run"* urmat de *[captură de ecran cu eroarea `ENOENT` la rularea `npm run dev` în folderul greșit]*.
* **Răspuns AI**: Identificarea faptului că utilizatorul rula comanda în directorul rădăcină în loc de directorul `app` (unde se află `package.json`). Indicarea soluției: `cd app` urmat de `npm run dev`.

### 4. Validarea vizuală a listei statice
* **Prompt utilizator**: *"Asa ar trebui sa rate?"* *[captură de ecran cu grila de destinații, unele evidențiate cu fundal verde]*.
* **Răspuns AI**: Confirmarea corectitudinii implementării (așezarea în grilă, aplicarea corectă a stilurilor `.vizitat`) și trecerea la implementarea stării (state).

### 5. Adăugarea interactivității: State și Rezumat (Exercițiul 2)
* **Prompt utilizator**: (Continuare de la validarea anterioară).
* **Răspuns AI**: Furnizarea codului pentru componenta `Rezumat.jsx` și ghidarea actualizării fișierelor `DestinatieCard.jsx` (adăugarea butonului), `ListaDestinatii.jsx` (transmiterea funcției `onToggle`) și `App.jsx` (inițializarea `useState` și funcția `handleToggle`).

### 6. Validarea interactivității
* **Prompt utilizator**: *"Asa?"* *[captură de ecran cu interfața actualizată: rezumat calculat corect și butoane funcționale]*.
* **Răspuns AI**: Confirmarea funcționării perfecte a stării (butoanele schimbă culoarea cardurilor, iar rezumatul se actualizează dinamic).

### 7. Implementarea Formularului de adăugare și refactoring (Exercițiul 3)
* **Prompt utilizator**: *"Vreau sa numim fisierul AdaugareDestinatie nu formulardestinatie"*.
* **Răspuns AI**: Adaptarea codului pentru a respecta preferința utilizatorului. Furnizarea codului pentru `AdaugareDestinatie.jsx` (cu tratarea evenimentului de submit și gestionarea stării locale a câmpurilor) și integrarea componentei redenumite în `App.jsx`.

### 8. Finalizarea și verificarea globală
* **Prompt utilizator**: *"Merge"* *[captură de ecran cu o nouă destinație adăugată din formular]*.
* **Răspuns AI**: Confirmarea finalizării cu succes a laboratorului, validarea adăugării noii destinații și a actualizării stării globale. Furnizarea comenzilor Git necesare pentru salvarea progresului (`git add .`, `git commit`, `git push`).

---

## Concluzie privind utilizarea AI
Asistentul AI a facilitat trecerea de la concept (îndrumar) la implementare practică, oferind bucăți de cod structurate logic și depanând rapid erorile de mediu (rularea greșită a serverului npm). De asemenea, a demonstrat flexibilitate prin adaptarea codului (redenumirea componentelor) la cerințele utilizatorului, menținând totodată corectitudinea funcțională a aplicației React.