import Contenedor from '../Components/Contenedor';

class Certificacion{
    nom: string;
    when: number;
    where: string;
    badge: string;
    ext: string;
    //habilidades: Array<string>;

    constructor(nom: string,when: number, where: string,badge: string,ext: string){
        this.nom = nom;
        this.when = when;
        this.where = where;
        this.badge = badge;
        this.ext = ext;
    }
}

export default function Escuela(){
    const certificaciones = [
        new Certificacion("Microsoft Certified: Azure Fundamentals",2022,"Microsoft","https://images.credly.com/size/340x340/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png","https://www.credly.com/badges/f1956845-16c9-49e6-b3a1-1179b63a55aa?source=linked_in_profile"),
        new Certificacion("Introducción a la Ciberseguridad",2022,"Cisco","https://images.credly.com/size/340x340/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png","https://www.credly.com/badges/8e6109e3-2516-4632-8e13-c89924d366bd"),
        new Certificacion("Backend con Java",2023,"Egg Live","https://media.licdn.com/dms/image/v2/D4D0BAQFZb08wSwFxlw/company-logo_100_100/B4DZbNxNudG0AU-/0/1747208955165/egglive_logo?e=1755734400&v=beta&t=Li3BsNIY0cZ9lJkFT84eeix65VUm7X9YMkfwBtGPQQg","https://egg-csv-bulk-certificates-prod.s3.amazonaws.com/certificates/641c9837532d56220d8f55d6-1703201075867.pdf"),
        new Certificacion("Frontend",2024,"Egg Live","https://media.licdn.com/dms/image/v2/D4D0BAQFZb08wSwFxlw/company-logo_100_100/B4DZbNxNudG0AU-/0/1747208955165/egglive_logo?e=1755734400&v=beta&t=Li3BsNIY0cZ9lJkFT84eeix65VUm7X9YMkfwBtGPQQg","https://egg-csv-bulk-certificates-prod.s3.amazonaws.com/certificates/641c9837532d56220d8f55d6-1709247032114.pdf")
    ];

    return(
        <Contenedor id={"cursos"}>
            <div className="uk-padding">
                <h3 className="uk-text-bold">Formación académica</h3>
                <ul data-uk-accordion >
                    {certificaciones.map((certificacion,index)=>
                        <li className={(index == 0)?"uk-open":""}>
                            <a className="uk-accordion-title" href>{certificacion.nom}</a>
                            <div className="uk-accordion-content uk-flex">
                                <img className="uk-width-1-5" src={certificacion.badge} alt={certificacion.nom.concat(" ","certificado")} />
                                <div>
                                    <p>{certificacion.when}</p>
                                    <p className='uk-text-bold'>{certificacion.where}</p>
                                    <a className="uk-link-muted" href={certificacion.ext}>Ver credencial<span uk-icon="link-external"></span></a>
                                </div>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </Contenedor>
    );
}