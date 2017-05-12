import React from 'react';
import "@g33kchris/fusionkit-css-typography/assets.css";
import styleMixer from "@g33kchris/fusionkit-js-stylemixer";
import css from './LinkyList.css';

const LinkyList = ({styles, ItemTemplate, items}) => {
    return(
        <ul className={styler(css, styles, s => s.root)}>      
            { items.map(i => (
                <li className={styler(css, styles, s => s.item)}>
                    <ItemTemplate href={i.href}>
                        {i.text}
                    </ItemTemplate>
                </li>
            ))}        
        </ul>);
}; 

export default LinkyList;