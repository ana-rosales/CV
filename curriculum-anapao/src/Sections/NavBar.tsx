
export default function NavBar() {

    return (
        <nav className="uk-navbar-container" data-uk-sticky>
            <div className="uk-container">
                <div data-uk-navbar>
                    <div className="uk-navbar-left">
                        <ul className="uk-navbar-nav">
                            <li>
                                <a href="javascript:void(0)" data-uk-icon="icon: code">Proyectos</a>
                                <div className="uk-navbar-dropdown">
                                    <ul className="uk-nav uk-navbar-dropdown-nav">
                                        <li><a href="https://github.com/ana-rosales/PracticaJSP">Inventario para vendedores</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="#cursos" data-uk-icon="icon: bolt">Cursos y Certificaciones</a></li>
                            <li><a href="#habilidades" data-uk-icon="icon: heart">Habilidades</a></li>
                        </ul>
                    </div>
                    <div className="uk-navbar-right">
                        <ul className="uk-navbar-nav">
                            <li className="uk-active"><a href="" data-uk-icon="icon: home"></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}