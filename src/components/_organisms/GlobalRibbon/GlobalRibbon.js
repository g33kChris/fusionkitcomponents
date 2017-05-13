import React from 'react';
import { Image } from '../../_atoms';
import { CreeperRibbonLeft } from '../../_molecules';
import styleMixer from '@g33kchris/fusionkit-js-stylemixer';
import baseStyles from './GlobalRibbon.css';
import styleMappers from './styleMappers';

const LeftContent = () => (
    <p>This is where left content will be</p>
);

const RightContent = () => (
    <p>This is where the right content will be</p>
);

const GlobalRibbon = ({ theme, logo }) => {
    const styles = styleMixer(baseStyles, theme);
    return (<CreeperRibbonLeft theme={styleMappers.toCreeperRibbonLeft(styles)}>
                <Image imageSrc={logo} theme={styleMappers.toImage(styles)} key="left" />
                <RightContent key="right" />
            </CreeperRibbonLeft>);
};

export default GlobalRibbon;