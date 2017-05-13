import React from 'react';
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

const GlobalRibbon = ({ theme }) => {
    const styles = styleMixer(baseStyles, theme);
    return (<CreeperRibbonLeft theme={styleMappers.toCreeperRibbonLeft(styles)}>
                <LeftContent key="left" />
                <RightContent key="right" />
            </CreeperRibbonLeft>);
};

export default GlobalRibbon;