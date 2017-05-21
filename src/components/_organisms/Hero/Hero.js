import React from 'react';
import styleMixer from "@g33kchris/fusionkit-js-stylemixer";
import getChildByKey from '../../helpers/getChildByKey';
import styleMappers from './styleMappers';
import { ContentBlock, NavButtons, CreeperRibbonLeft } from '../../_molecules';
import baseStyles from './Hero.css';

{/*<div className={bg} style={{backgroundImage: `url(${heroImage})`}}>
        <div className={root}>
            <HeaderRibbon styles={moleculeModifiers.headerRibbon} left={<HeaderLeftContent />} right={<HeaderRightContent />} />
            <div className={wrapper}>
                <div className={content}>
                    <ContentBlock styles={moleculeModifiers.contentBlock} />
                </div>
            </div>
            <Navigation styles={moleculeModifiers.navigation} />
        </div>
    </div>*/}


{/*<Image imageSrc={logo} theme={StyleMappers.GlobalRibbon.toImage(styles)} key="left" />
                    <LinkyList itemDto={linkDto} items={links} key="right" theme={StyleMappers.GlobalRibbon.toLinkyList(styles)} />*/}

const Hero = ({
    children,
    backgroundImage,
    content,
    navigation,    
    theme
}) => {
    const styles = styleMixer(baseStyles, theme);
    return (
        <div className={styles.rootWrapper} style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className={styles.root}>
                { children }                   
                <div className={styles.wrapper}>
                    { content && 
                    <div className={styles.content}>
                        <ContentBlock {...content} theme={styleMappers.toContentBlock(styles)} />
                    </div> 
                }
                </div>
                { navigation && <NavButtons {...navigation} theme={styleMappers.toNavButtons(styles)}/> }
            </div>
        </div>
    );
};

export default Hero;
