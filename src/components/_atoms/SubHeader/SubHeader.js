import React from 'react';
import "@g33kchris/fusionkit-css-typography/assets.css";
import styleMixer from "@g33kchris/fusionkit-js-stylemixer";
import baseStyles from './SubHeader.css';

const SubHeader = ({ theme, children }) => {
    const styles = styleMixer(baseStyles, theme);
    return (<h3 className={styles.root}>{ children }</h3>);
};

export default SubHeader;