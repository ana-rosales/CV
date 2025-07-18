
export default function Home(){
    return(
        <div className="uk-padding-large uk-margin-large uk-flex">
            <img src="https://avatars.githubusercontent.com/u/99065311?v=4" alt="Ana Pau" />
            <div className="uk-padding-large uk-flex uk-flex-column">
                <h2>Ana Paula Rosales Olguín</h2>
                <h1 className="uk-text-bold">Desarrolladora full stack</h1>
                <p>Ingeniera en Computación egresada de la UNAM, con experiencia en desarrollo de sistemas con Backend en Java.</p>
                <a className="uk-link-muted" href="#habilidades" data-uk-scroll>Habilidades <span uk-icon="arrow-down"></span></a>
            </div>
            
        </div>
    );
}