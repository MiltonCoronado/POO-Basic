//helpers functions.
function videoPlay(id){
    const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log("se esta reproduciendo desde la url " + urlSecreta) 
}

function videoStop(id){
    const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log("pausamos la url " + urlSecreta) 
}

//creando el objeto platziClass para modulos.
export class PlatziClass {
    constructor({
        name,
        videoID,
    }){
        this.name = name;
        this.videoID = videoID;
    }
    reproducir(){
        videoPlay(this.videoID);
    }
    pausar(){
        videoStop(this.videoID);
    }
}


//creando el objeto comentario
class Comment {
    constructor({
        content,
        studentName,
        studentRole = "estudiante",
    }) {
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = Math.round(Math.random() * 1000);
    }
    publicar(){
        console.log(`${this.studentName} ( ${this.studentRole} )`);
        console.log(this.likes + " likes");
        console.log(this.content);
    }
};


//creando el objeto course.
class Course {
    constructor({
        name,
        classes = [],
        isFree = false,
        lang = "spanish"
    }){
            this.variable1 = name;
            this.classes = classes;
            this.isFree = isFree;
            this.lang = lang;
        };
    // changeName(nuevoNombrecito){
    // this._name = nuevoNombrecito;
    get name(){//TODO: getter y setters.
        return this.variable1;
    };

    set name(nuevoNombrecito){
        if (nuevoNombrecito === "curso malito de programacion basica"){
            console.error("wey... no");
        }else {
            this.variable1 = nuevoNombrecito;
        }
        
    }
};

// cursoProgBasica.changeName("lalala")
// cursoProgBasica.name = "curso pagado de pragramacion"


//instanciando los cursos.
const cursoProgBasica = new Course({
    name: "curso gratis de programacion basica",
    isFree: true
});

const cursoDefinitivoHtml = new Course({
    name: "curso definitivo de html y css",
});

const cursoPracticoHtml = new Course({
    name: "curso practico de html y css",
    lang: "english",
});


//creando el objeto learningPath.
class LearningPath {
    constructor({name,courses = [],}){
        this.name = name;
        this.courses = courses;
    }
}

//instanciando los learningPth.
const escuelaWeb = new LearningPath({
    name: "escuela de desarrollo web",
    courses: [
        cursoProgBasica,
        cursoDefinitivoHtml,
        cursoPracticoHtml,
    ],
});

const escuelaData = new LearningPath({
    name: "escuela de Data Science",
    courses: [
        cursoProgBasica,
        "curso databusiness",
        "curso dataviz",
    ],
});

const escuelaVgs = new LearningPath({
    name: "escuela de Data Science",
    courses: [
        cursoProgBasica,
        "curso de unity",
        "curso de unreal",
    ],
});


//creando el objeto estudiante.
class Student {
    constructor({
        name,
        email,
        userName,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPath = [],
    }){
        this.name = name;
        this.email = email;
        this.userName = userName;
        this.socialMedia = {
            twitter,//({twitter: twitter,
            instagram,//instagram: instagram,
            facebook,//facebook: facebook,})
        };
    
        this.approvedCourses = approvedCourses;
        this.learningPath = learningPath;
    };


    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
        })
        comment.publicar();//aqui se llama al metodo publicarComentario de la clase comment.
    }
};    
    

class FreeStudent extends Student {
    constructor(milton){
        super(milton);
    }
    approveCourse(newCourse) {
        if (newCourse.isFree){
            this.approvedCourses.push(newCourse)
        }else {
            console.warn(`lo siento ${this.name}, solo puedes tomar cursos abiertos`)
        }
    }
}

class BasicStudent extends Student {
    constructor(milton){
        super(milton);
    }
    approveCourse(newCourse) {
        if (newCourse.lang !== "english"){
            this.approvedCourses.push(newCourse)
        }else {
            console.warn(`lo siento ${this.name} solo puedes tomar cursos en español`)
        }
    }
}

class ExpertStudent extends Student {
    constructor(milton){
        super(milton);
    }
    approveCourse(newCourse){
        this.approvedCourses.push(newCourse)
    }
}

class TeacherStudent extends Student {
    constructor(milton){
        super(milton);
    }
    approveCourse(newCourse){
        this.approvedCourses.push(newCourse)
    }
    publicarComentario(commentContent){//por que aca se sobreescribre el metodo???
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: "profesor",
        });
        comment.publicar();
    }
}


//instanciando a los estudiantes.
const juan = new FreeStudent({
    name: "juanDC",
    userName: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPath: [
        escuelaWeb,
        escuelaVgs,
    ],
});

const miguelito = new BasicStudent({
    name: "Miguelito",
    userName: "miguelitofeliz",
    email: "miguelito@juanito.com",
    instagram: "miguelito_feliz",
    learningPath: [
        escuelaWeb,
        escuelaData,

    ],
});

const freddy = new TeacherStudent({
    name: "Freddy Vega",
    userName: "freddiert",
    email: "fvega@platziteam.com",
    instagram: "freddiert",
});
