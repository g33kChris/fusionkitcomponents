import React from 'react';
import styleMixer from '@g33kchris/fusionkit-js-stylemixer';
import getChildByKey from '../../helpers/getChildByKey';
import baseStyles from './CreeperRibbonLeft.css';

const CreeperRibbonLeft = ({ children, theme }) => {
    const styles = styleMixer(baseStyles, theme);
    return (<div className={styles.root}>
                <div className={styles.wrapper}>
                    <div className={styles.left}>
                        { getChildByKey(children, 'left') }
                    </div>
                    <div className={styles.right}>
                        { getChildByKey(children, 'right') }
                    </div>
                </div>
            </div>);
};

export default CreeperRibbonLeft;