# Generazione di terreni procedurali

## Descrizione
Il progetto si propone di facilitare la creazione di terreni procedurali attraverso l'uso di classi chiamate generatori che, partendo da funzionalità base possono essere combinati per creare risultati più interessanti.
Per arrivare a questo risultato è stata creata una classe "astratta" Generator che possiede 2 metodi, `displacementFor`, che ritorna l'altezza per un punto (i,j) su una griglia 2D ad un particolare istante di tempo e `heightMap`, che prende queste altezze e ne genera un'oggetto di tipo HeightMap che successivamente può essere trasformato in un immagine.
Ogni generatore implementa il metodo `displacementFor` per ottenere un diverso comportamento, possiamo ignorare il tempo per terreni statici oppure tenerne conto per evolvere il terreno durante l'esecuzione (una montagna che periodicamente si abbassa o le onde).
Sono stati implementati alcuni comportamenti come `WaveGenerator` che genera onde verso una certa direzione oppure `HeightMapGenerator` che, presa una HeightMap genera il corrispondente terreno ritornando l'altezza di ogni elemento della griglia.

Poi è stato implementato un generatore `MixGenerator` che permette di combinare 2 altri generatori con una regola definita dall'utente, anche `MixGenerator` è un generatore quindi possiamo combinarlo con altri generatori, formando una gerarchia che ci permette di definire la forma del nostro terreno.

Per creare e gestire la griglia 2D è stata creata la classe Grid2DLayout che inserisce gli oggetti forniti in una griglia rows x columns e ne gestisce la posizione e l'aggiornamento.



- overall description: what your project is about and the files it uses.
- results, including images of the scenes created, taken in a way that clearly illustrates that they satisfy the specification.
- brief explanation of the process that you used to make your scene. Include tools, assets, and planning steps.