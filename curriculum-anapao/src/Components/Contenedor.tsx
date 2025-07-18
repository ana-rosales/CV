
export default function Contenedor({ id,children, oscuro }: {oscuro: boolean}){
    var estilos = "uk-container uk-container-expand uk-padding";

    if(oscuro){
        estilos = estilos + " uk-background-muted";
    }

    return (
        <div id={id} className={estilos}>
            { children }
        </div>
    );
}