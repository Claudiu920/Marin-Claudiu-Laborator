# City Explorer

Mini-site de prezentare a unor destinații turistice, realizat în cadrul disciplinei Tehnologii Web.

## Laboratorul 2: Vite și JavaScript Modern

În această etapă s-au pus bazele dezvoltării JavaScript moderne folosind mediul de rulare furnizat de Vite și React. S-a realizat structurarea aplicației **City Explorer** prin separarea logică a datelor, a funcțiilor de prelucrare și a cererilor de rețea.

### Realizări principale:
* **Configurare mediu de lucru**: Inițializarea proiectului cu Vite (`React + JavaScript`), structurarea directoarelor (`src/data`, `src/utils`, `src/api`) și configurarea fișierului principal de intrare (`src/main.jsx`).
* **Exercițiul 1 (Date și prelucrări)**: 
  * Definirea modulului de date `src/data/destinatii.js`.
  * Implementarea funcțiilor de manipulare a listelor în `src/utils/destinatii.js` utilizând metode moderne ES6+ (`map`, `filter`, `reduce`, `sort` pe o copie imutabilă `[...list]`).
* **Exercițiul 2 (Imutabilitate)**:
  * Implementarea modificărilor stării fără alterarea datelor originale (`marcheazaVizitat`, `adaugaDestinatie`, `stergeDestinatie`).
  * Verificarea imutabilității și refolosirii referințelor din memorie prin operatorul Spread (`...`).
* **Exercițiul 3 (Integrare API & Asincronism)**:
  * Crearea modulului `src/api/orase.js` pentru comunicarea cu serverul extern JSONPlaceholder folosind `fetch` și `async/await`.
  * Gestionarea erorilor HTTP (verificare `response.ok` și aruncare de erori explicite `throw new Error`).
  * Tratarea excepțiilor prin blocuri `try/catch` în apelurile din `src/main.jsx`.

Autor: Marin Claudiu