import Contenedor from '../Components/Contenedor';

export default function Footer(){
    return (
        <Contenedor oscuro>
            <div className="uk-container uk-flex uk-flex-around">
                <div className="uk-flex uk-flex-column uk-flex-start">
                    <p><strong>Datos Personales</strong></p>
                    <p>
                        <strong>RFC</strong> ROOA031116HG0<br />
                        <strong>CURP</strong> ROOA031116MDFSLNA0<br />
                        <strong>Dirección</strong> Cereales 201, Valle del Sur, C.P.: 09819<br />
                    </p>
                </div>
                <div className="uk-flex uk-flex-column uk-flex-start">
                    <p><strong>Datos de Contacto</strong></p>
                    <p>
                        <span className="uk-icon-button" data-uk-icon="icon: microsoft"></span> paula_rosales_olguin (skype)<br />
                        <span className="uk-icon-button" data-uk-icon="icon: receiver"></span> +52 55 4567 6633<br />
                        <span className="uk-icon-button" data-uk-icon="icon: mail"></span> anapaula161103@gmail.com<br />
                        <span className="uk-icon-button" data-uk-icon="icon: linkedin"></span> www.linkedin.com/in/ana-rosales-b6a092221<br />
                    </p>
                </div>
            </div>
        </Contenedor>
    );
}