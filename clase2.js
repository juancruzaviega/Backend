
class Usuario {
    constructor(nombre, apellido, books = [], mascotas = [],) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.books = books;
        this.mascotas = mascotas;
    }
    getFullName() {
        return (`${this.nombre} ${this.apellido}`);
    }
    addMascota(nombre) {
        this.mascotas.push(nombre);
        void this.mascotas
    }
    countMascotas() {
        return this.mascotas.length;
    }
    addBook(name, autor) {
        this.books.push({ name: name, autor: autor });
        void this.books
    }
    getBookNames() {
        let bookNames = [];
        this.books.forEach(book => bookNames.push(book.name));
        return bookNames
    }

}

const usuario1 = new Usuario('Juan', 'Aviega')
console.warn('Nuevo usuario creado')
console.log(usuario1)
usuario1.addMascota('Perro')
usuario1.addMascota('Gato')
usuario1.addMascota('Mono')
console.warn('Nuevas mascotas agregadas')
console.log(usuario1)
console.log(`Cantidad de mascotas : ${usuario1.countMascotas()}`)
usuario1.addBook('La receta de la felicidad', 'Deepak Chopra')
usuario1.addBook('El Principito', 'Antoine de Saint-Exupery')
usuario1.addBook('Siddhartha', 'Herman Hesse')
console.warn('Libros agregados')
console.log(usuario1)
console.log(`Nombre de libros agregados: ${usuario1.getBookNames()}`)





