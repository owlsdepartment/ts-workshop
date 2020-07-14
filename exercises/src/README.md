# Ćwiczenie 1 - Fabryka Samochodów

1. `createCar.ts`
  * zaimplementować metodę `createCar`, aby przyjmowała `CarParams` i zwracała `Car`. Do daty można użyć `getRandomDate` i `getRand` do innych wartości
2. `index.ts`
  * zmienić typ argumentu funkcji `takeOrders` oraz zaimplementować tą funkcję tak, żeby z listy zamówień otrzymać liste aut
  * stworzyć fabrykę samochodów w funckji `main`
  * wykorzystać funkcję `takeOrders` i odkomentować wywołanie `sendToClients`

# Ćwiczenie 2 - Music Player

1. `playSong.ts`
  * zaimplementować funkcje, która może przyjąc: jedną piosenkę | kolejkę (tablice piosenek) | playliste 
  następnie wywołuje odpowienią metode: `printSong`, `printQueue` albo `printPlaylist`
  metoda ma zwracać konkretny string w zależności od parametru:
    - song: "song"
    - queue: "queue"
    - playlist: "playlist"

# Ćwiczenie 3 - Lotnisko

1. `aircraft.ts`
  * zaimplementować klasy: `Plane`, `Helicopter` i `UFO` w taki sposób, żeby były kompatybilne z funkcją `landAircraft` w pliku `index.ts`
2. `hanger.ts`
  * zaimplementować klasę `Hangar` tak, aby przechowywała pojazdy latające, ale tylko i wyłącznie jednego typu
3. `airport.ts`
  * zamienić typy interfejsu `Hangars` zgodnie z komentarzami
  * odkomentować zakomentowany kod w pętli `for` w konstruktorze
  * odkomentować metody `getPlane`, `getUFO`, `getHelicopter`
4. `index.ts`
  * odkomentować kod w funkcji `main`

