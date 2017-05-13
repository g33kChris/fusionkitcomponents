import React from 'react';
import styleMixer from '@g33kchris/fusionkit-js-stylemixer';
import { Image, LinkButton } from '../../_atoms';
import { CreeperRibbonLeft, LinkyList } from '../../_molecules';
import { ChildDto, StyleMappers, PropMappers } from '../../../components';
import baseStyles from './GlobalRibbon.css';

const GlobalRibbon = ({ theme, logo, links }) => {
    const styles = styleMixer(baseStyles, theme);
    const linkDto = 
        new ChildDto(LinkButton, StyleMappers.LinkyList.toLinkButton, PropMappers.LinkyList.toLinkButton);
    return (<CreeperRibbonLeft theme={StyleMappers.GlobalRibbon.toCreeperRibbonLeft(styles)}>
                <Image imageSrc={logo} theme={StyleMappers.GlobalRibbon.toImage(styles)} key="left" />
                <LinkyList itemDto={linkDto} items={links} key="right" theme={StyleMappers.GlobalRibbon.toLinkyList(styles)} />
            </CreeperRibbonLeft>);
};

export default GlobalRibbon;
