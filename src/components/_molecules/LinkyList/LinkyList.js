import React from 'react';
import "@g33kchris/fusionkit-css-typography/assets.css";
import styleMixer from "@g33kchris/fusionkit-js-stylemixer";
import baseStyles from './LinkyList.css';

const listItems = ({ Template, styleMapper, propMapper }, styles, items) => {
    const itemStyle = styleMapper(styles);
    const mappedItems = items.map(propMapper);
    return mappedItems.map(i => (
        <li className={styles.item}>
            <Template theme={itemStyle} href={i.href}>
                { i.text }
            </Template>
        </li>
    ));
};

const LinkyList = ({theme, itemDto, items}) => {
    const styles = styleMixer(baseStyles, theme);
    return (
        <ul className={styles.root}>    
            { listItems(itemDto, styles, items) }
        </ul>
    );
};

export default LinkyList;