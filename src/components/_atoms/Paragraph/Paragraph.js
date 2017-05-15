import React from 'react';
import "@g33kchris/fusionkit-css-typography/assets.css";
import styleMixer from "@g33kchris/fusionkit-js-stylemixer";
import baseStyles from './Paragraph.css';

const Paragraph = ({ theme, children }) => {
    const styles =  styleMixer(baseStyles, theme);
    return (<p className={styles.root}>{ children }</p>);
};

export default Paragraph;
