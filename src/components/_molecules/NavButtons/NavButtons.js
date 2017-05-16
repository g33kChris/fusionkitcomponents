import React from 'react';
import styleMixer from "@g33kchris/fusionkit-js-stylemixer";
import styleMappers from './styleMappers';
import { Button } from '../../_atoms';
import baseStyles from './NavButtons.css';

const NavButtons = ({ prevAction, prevLabel, nextAction, nextLabel, theme}) => {
    const styles = styleMixer(baseStyles, theme);
    return (<div className={styles.root}>
                <div className={styles.left}>
                    <Button theme={styleMappers.toButton.left(styles)}>{ prevLabel }</Button>
                </div>
                <div className={styles.right}>
                    <Button theme={styleMappers.toButton.right(styles)}>{ nextLabel }</Button>
                </div>       
            </div>);
};

export default NavButtons;
