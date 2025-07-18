import Card from './Card';

export default function Filter({ filters, children }){

    return(
        <>
            <div data-uk-filter="target: .js-filter">
                <ul className="uk-subnav uk-subnav-pill">
                    <li className="uk-active" data-uk-filter-control=".tag-all"><a href="javascript:void(0)">Todo</a></li>
                    {filters.map((filter)=>
                        <li data-uk-filter-control={".tag-".concat(filter.tag)}><a href="javascript:void(0)">{filter.nom}</a></li>
                    )}
                    
                </ul>
                <ul className="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center" data-uk-grid>
                    {children}
                </ul>
            </div>
        </>
        
    );
}