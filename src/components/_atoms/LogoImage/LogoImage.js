import React from 'react';
import styleMixer from '@g33kchris/fusionkit-js-stylemixer';
import baseStyles from './LogoImage.css';

const LogoImage = ({imageSrc, theme }) => {
    const styles = styleMixer(baseStyles, theme);
    return (<img src={imageSrc} className={styles.root} />);
};

export default LogoImage;