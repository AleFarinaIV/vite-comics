
// funzione per rendere attivo un singolo elemento al click 
function itemClicked(array, index) {
    array.forEach((item, i) => {
        item.active = (i === index)
    })
    console.log('ciao')
}

export { itemClicked }