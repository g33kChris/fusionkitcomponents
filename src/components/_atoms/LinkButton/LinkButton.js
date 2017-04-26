import React from 'react';
import "@g33kchris/fusionkit-css-typography/assets.css";
import styles from './LinkButton.css';

const LinkButton = ({ href, children }) => (
    <a className={styles.root} href={href}>{ children }</a>
);

export default LinkButton;