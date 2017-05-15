import React from 'react';
import "@g33kchris/fusionkit-css-typography/assets.css";
import styleMixer from "@g33kchris/fusionkit-js-stylemixer";
import baseStyles from './Button.css';

const Button = ({ children, action, theme }) => {
    const styles = styleMixer(baseStyles, theme);
    return (<button className={styles.root} onClick={action}>
                { children }
            </button>);
};

export default Button;
