# Pengenalan pada REDUX 

## src > reduxConcept

pengenalan dasar redux tanpa aplikasi, initial state > buat reducer > masukan ke store > dispatch action

## src reduxTool + reduxpersist

penggunaan redux dengan aplikasi statis pada route "/" dan "/add"

redux persist sebagai middleware untuk menjaga/menyimpan state ke dalam local storage browser

## src asynchronus redux

penggunaan redux dengan middleware thunk untuk state yang memerlukan pemanggilan API (asynchronus)

penggunaan aplikasi pada route "/thunk/get"

### `npm start`
### `http://localhost:3000/thunk/get` >> untuk asynchronus redux
### `http://localhost:3000/` `http://localhost:3000/add` >> untuk redux biasa