import React from 'react';
import styleMixer from "@g33kchris/fusionkit-js-stylemixer";
import styleMappers from './styleMappers';
import { BgMediaTile } from '../../_molecules';
import baseStyles from './FeaturedItems.css';

const featuredItems = (styles, items) => {
    return items.map((i, index) => (
        <div className={styles.column}>
            <BgMediaTile theme={styleMappers.toBgMediaTile(styles)} {...i} />
        </div>
    ));
};

const FeaturedItems = ({ theme, items }) => {
    const styles = styleMixer(baseStyles, theme);
    return(
        <section className={styles.root}>
            <div className={styles.wrapper}>
                { featuredItems(styles, items) }
            </div>
        </section>
    )
};

export default FeaturedItems;
