import React, { PropTypes } from 'react';
import "@g33kchris/fusionkit-css-typography/assets.css";
import styleMixer from "@g33kchris/fusionkit-js-stylemixer";
import baseStyles from './LinkButton.css';

const LinkButton = ({ href, children, theme }) => {
    const styles = styleMixer(baseStyles, theme);
    return(<a className={styles.root} href={href}>{ children }</a>);
};

LinkButton.propTypes = {
    href: PropTypes.string,
    children: PropTypes.element
};

export default LinkButton;