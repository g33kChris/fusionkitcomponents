import React from 'react';
import styles from './LinkButton.css';

const LinkButton = ({ href, children }) => (
    <a className={styles.root} href={href}>{ children }</a>
);

export default LinkButton;