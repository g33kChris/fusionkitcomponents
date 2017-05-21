import React from 'react';
import styleMixer from "@g33kchris/fusionkit-js-stylemixer";
import styleMappers from './styleMappers';
import "@g33kchris/fusionkit-css-typography";
import baseStyles from './ServiceLinks.css';
import { LinkButton } from '../../_atoms';

const Item = ({ styles, theme, service }) => (
    <li className={styles.item}>
        <LinkButton href={service.href} theme={styleMappers.toLinkButton(theme)}> 
            <span className={styles.hiddenLabel}>{ service.label }</span>
        </LinkButton>
    </li>
);

const ServiceLinks = ({ services, theme }) => {
    const { twitter, youtube, tumblr, facebook, twitch, rss } = services;
    const styles = styleMixer(baseStyles, theme);
    return (
        <ul className={styles.root}>
            { twitter && <Item styles={styles} theme={styles.twitter} service={twitter} /> }
            { rss && <Item styles={styles} service={rss} theme={styles.rss} /> }
            { tumblr && <Item styles={styles} service={tumblr} theme={styles.tumblr} />}
            { youtube && <Item styles={styles} service={youtube} theme={styles.youtube} /> }
            { facebook && <Item styles={styles} service={facebook} theme={styles.facebook} /> }
            { twitch && <Item styles={styles} service={twitch} theme={styles.twitch} /> }
        </ul>
    );
}                                                    

export default ServiceLinks;
