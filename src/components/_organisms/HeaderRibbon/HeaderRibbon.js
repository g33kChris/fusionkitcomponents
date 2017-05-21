import React from 'react';
import styleMixer from "@g33kchris/fusionkit-js-stylemixer";
import { CreeperRibbonLeft, ServiceLinks } from '../../_molecules';
import getChildByKey from '../../helpers/getChildByKey';
import styleMappers from './styleMappers';
import baseStyles from './HeaderRibbon.css';

const HeaderRibbon = ({
    services,
    children,
    theme
}) => {
    const styles = styleMixer(baseStyles, theme);

    console.log(children);
    const LeftContent = children[0];

    const childrenWithProps = React.Children.map(children,
     (child) => React.cloneElement(child, {
        key: "left",
        theme: styleMappers.toLogo(styles)
     })
    );

    return (
        <CreeperRibbonLeft theme={styleMappers.toCreeperRibbonLeft(styles)}>
            <div key="left">{ childrenWithProps }</div>
            <ServiceLinks services={services} key="right" theme={styleMappers.toServiceLinks(styles)} />
        </CreeperRibbonLeft> 
    );
};

export default HeaderRibbon;
