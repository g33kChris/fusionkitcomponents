import React, { PropTypes } from 'react';
import "@g33kchris/fusionkit-css-typography/assets.css";
import styleMixer from "@g33kchris/fusionkit-js-stylemixer";
import baseStyles from './LivingLinkButton.css';

const LivingLinkButton = ({ href, children, theme }) => {
    const styles = styleMixer(baseStyles, theme);
    return(
        <a className={styles.root} href={href}>
            <span className={styles.effect}></span>
            { children }
        </a>
    );
};

LivingLinkButton.propTypes = {
    href: PropTypes.string,
    children: PropTypes.element
};

export default LivingLinkButton;