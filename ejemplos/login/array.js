var array = []
for (var i = 0; i<=10; i++){
    array.push(i);
}
console.log(array)

var posicion = array.indexOf(7) //valores tranquis, no objetos
console.log(posicion)

var posicionDos = array.findIndex((item) => item == 7) // funciona con objetos
console.log(posicionDos)

//x.shift() elimina el primer elemento del array x
//x.pop() elimina el último elemento del array x
//x.unshift(0,2) añade ambos elementos
//x.push(1) añade 1 al final
//x.splice(0,2) elimina el elemento en la posición 0, la cantidad de elementos (2)
//x.sort() ordena el elemento según el primer dígito de izq a der
//x.reverse() pone al revés al array
//x.concat(y) une ambos arrays, primero x, luego y
//x.join("-")) Transforma los elementos a texto, separados por - , predeterminado, separa por ,

var y = ["Año",4,"Bote",3,2]
y.sort()
console.log(y)