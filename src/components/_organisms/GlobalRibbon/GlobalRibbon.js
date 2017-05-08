import React from 'react';
import styles from './GlobalRibbon.css';

const GlobalRibbon = () => (
    <div className={styles.root}>
        <div className={styles.wrapper}>
            <div className={styles.left}>
                This is the left content.
            </div>
            <div className={styles.right}>
                This is the right content.
            </div>
        </div>
    </div>
);

export default GlobalRibbon;