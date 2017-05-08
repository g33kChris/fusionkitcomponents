import React from 'react';
import styleMixer from '@g33kchris/fusionkit-js-stylemixer';
import baseStyles from './GlobalRibbon.css';
import themes from './Themes';


const GlobalRibbon = ({ leftContent, rightContent, theme }) => {
    const styles = styleMixer(baseStyles, theme);
    return (<div className={styles.root}>
                <div className={styles.wrapper}>
                    <div className={styles.left}>
                        { leftContent }
                    </div>
                    <div className={styles.right}>
                        { rightContent }
                    </div>
                </div>
            </div>);
};

export default GlobalRibbon;