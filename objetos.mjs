//Objeto literal.--------------------------------------------------------------------------------------------------------------
const natalia = {//Objeto
    cursosAprobados: [
        "curso definitivo de html y css",
        "curso practico de html y css",
    ],
    name: "natalia",
    age: 20,
    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito);
    //Metodo que tambien puede ser escrito asi ==>> aprobarCurso: function (nuevoCursito){this.cursosAprobados.push(nuevoCursito)};
    },
};



//prototipado. Object.create y Pure Prototypal inheritance----------------------------------------------------------------------
var Person = {
    edad: 'default',
    getEdad: function() {
        return this.edad;
    }
};

var toni = Object.create(Person);
//toni va a mostrar un objeto vacio, pero que enrealidad si tiene sus propiedades.



//prototipado sin la keyword "new".------------------------------------------------------------------------------------------------
function CreateTeacher(name, age, city){
    const elkin = {};
     
    elkin.name = name,
    elkin.age = age,
    elkin.city = city,
    elkin.saludar = function(){
        console.log('hola como estas?')
    }
    
    return elkin;
    } 

    const Teacher = CreateTeacher('elkincito', 75, 'Lima');
    Teacher.saludar();



//Prototipado convencional.--------------------------------------------------------------------------------------------------------
function Teacher (name, age, city) {//prototipo.
    this.name = name;
    this.age = age;
    this.city = city;
};
//prototype chain: si la instancia del prototipo tiene un metodo escrito dentro, lo usa, si no se va al del siguiente prototipo.
Teacher.prototype.saludar = function (){
  console.log(`soy ${this.name} de la ciudad de ${this.city}`);
};

const elkin = new Teacher('elkin', 41, 'lima');
elkin.saludar(); 
//Alumno hereda de Teacher.
function Alumno(name, age, city, course){
    Teacher.call(this, name, age, city);
    this.course = course;//se agrega el nuevo parametro.
};

Alumno.prototype = Object.create(Teacher.prototype);//esto es UNION DE PROTOTIPO.(aca alumno esta heredando los metodos de Teacher)
Alumno.prototype.constructor = Alumno;//aca se esta redefiniendo cual es el constructor de Alumno.

const milton = new Alumno('milton', 35, 'ica', 'programacion');

milton.saludar();//milton puede ejucutar el metodo saludar proveniente del prototypo Teacher. Gracias a la unuion prototipal.
console.log(milton)
//new realiza esto por debajo:
//var juanita = {}
//return Teacher(name, age, cursosAprobados).bind(juanita);
//juanita.__proto__ = Teacher.prototype


//Prototipos con la sintaxis de clases------------------------------------------------------------------------------------------
class Teacher2 {
    constructor({name,cursosAprobados = [],age,email,}){
        this.name = name;
        this.email = email;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    };

    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito)
    };
};

const miguelito = new Teacher2({
    name: "miguel",
    age: 28,
    email: "miguelito@platzi.com",
});

console.log(miguelito)
    






