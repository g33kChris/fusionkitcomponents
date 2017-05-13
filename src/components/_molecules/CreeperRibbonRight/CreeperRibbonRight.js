import React from 'react';
import styleMixer from '@g33kchris/fusionkit-js-stylemixer';
import baseStyles from './CreeperRibbonRight.css';

 const getComponent = (children, key) => {
    return children.filter( (comp) => {
            return comp.key === key;
    });
};

const CreeperRibbonRight = ({ children, theme }) => {
    const styles = styleMixer(baseStyles, theme);
    return (<div className={styles.root}>
                <div className={styles.wrapper}>
                    <div className={styles.left}>
                        { getComponent(children, 'left') }
                    </div>
                    <div className={styles.right}>
                        { getComponent(children, 'right') }
                    </div>
                </div>
            </div>);
};

export default CreeperRibbonRight;