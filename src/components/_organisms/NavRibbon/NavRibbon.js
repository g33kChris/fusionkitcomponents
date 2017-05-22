import React from 'react';
import styleMixer from "@g33kchris/fusionkit-js-stylemixer";
import styleMappers from './styleMappers';
import { LinkButton } from '../../_atoms';
import baseStyles from './NavRibbon.css';

const items =  (styles, links) => {
    return links.map((i , index) => (
        <li className={styles.item} key={index}>
            <LinkButton href={i.href} theme={styleMappers.toLinkButton(styles)}>
                { i.text }
            </LinkButton>
        </li>
    ));
};

const NavRibbon = ({ theme, links }) => {
    const styles = styleMixer(baseStyles, theme);
    console.log(styles);
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <ul className={styles.items}>
                    { links && items(theme, styles, links) }
                </ul>
            </div>
        </div>
    );
}

export default NavRibbon;
