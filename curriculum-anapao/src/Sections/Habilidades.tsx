
import Contenedor from '../Components/Contenedor';
import Card from '../Components/Card';
import Filter from '../Components/Filter';

class Habilidad {
    titulo: string;
    tags: Array<number>;
    nivel: number;

    constructor(titulo: string, tags: Array<number>, nivel: number){
        this.titulo = titulo;
        this.tags = tags;
        this.nivel = nivel;
    }
}

export default function Habilidades(){
    const habilidades = [
        new Habilidad("Java",[0,1],50),
        new Habilidad("MySQL",[0,2],75),
        new Habilidad("JDBC & JPA",[0,1,2],50),
        new Habilidad("Spring MVC",[0,2,3,4,5],50),
        new Habilidad("JUnit",[0,2],50),
        new Habilidad("Git",[6],50),
        new Habilidad("React",[4,5,7],25),
        new Habilidad("HTML",[5,7],75),
        new Habilidad("CSS",[5,7],50),
        new Habilidad("JavaScript",[5,7],50),
        new Habilidad("TypeScript",[5,7],25),
        new Habilidad("UIkit",[4,5,7],75),
        new Habilidad("JSP",[0,1,5],50),
        new Habilidad("MariaDB",[0,2],50),
        new Habilidad("SQLite",[0,2],75),
        new Habilidad("Glassfish Server",[5,8],50),
        new Habilidad("JQuery",[4,5,7],50),
        new Habilidad("XP",[6,9],75),
        new Habilidad("SCRUM",[6,9],75)
    ];

    const filters = [
        {tag: "back", nom: "Backend"},          //0
        {tag: "j2ee", nom: "J2EE"},             //1
        {tag: "db", nom: "DB"},                 //2
        {tag: "api", nom: "API"},               //3
        {tag: "framework", nom: "Framework"},   //4
        {tag: "web", nom: "Web"},               //5
        {tag: "colab", nom: "Herramientas Colaborativas"},  //6
        {tag: "front", nom: "Frontend"},        //7
        {tag: "servidor", nom: "Servidor"},     //8
        {tag: "metodo", nom: "Metodología"},    //9
    ];
    
    return (
        <Contenedor id={"habilidades"} oscuro>
            <div className="uk-padding">
                <h3  className="uk-text-bold">Resumen de Habilidades</h3>
                <Filter filters={filters}>
                    {habilidades.map((habilidad,index)=> //recorrer habilidades
                        <li key={index} className={habilidad.tags.map((tag)=>" tag-all tag-".concat(filters[tag].tag)).join(" ")}>
                            <Card titulo={habilidad.titulo} tags_prp={habilidad.tags.map((tag)=>filters[tag].nom)} nivel={habilidad.nivel} />
                        </li>
                    )}
                </Filter>
            </div>
        </Contenedor>
    );
}