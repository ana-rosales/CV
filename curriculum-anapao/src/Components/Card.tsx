import Badge from '../Components/Badge'

export default function Card({ titulo,tags_prp,nivel }: {titulo: string, tags_prp: Array<string>, nivel: number}){
    
    return(
        <div className="">
            <div className="uk-card uk-card-default uk-card-body">
                <h3 className="uk-card-title">{ titulo }</h3>
                <div className="">
                    {tags_prp.map((tag_str: string) => <Badge ctnt_prp={tag_str} />)}
                </div>
                <div className="uk-flex uk-flex-middle uk-margin">
                    <p className="uk-margin-remove">{nivel}%</p>
                    <progress id="js-progressbar" className="uk-progress uk-margin-remove" value={ nivel } max="100"></progress>
                </div>
            </div>
        </div>
    );
}