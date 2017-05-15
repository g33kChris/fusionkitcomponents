import React from 'react';
import styleMixer from "@g33kchris/fusionkit-js-stylemixer";
import { ContentBlock } from '../../_molecules';
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

const Hero = ({
    logo,
    content,
    navigation,    
    theme 
}) => {
    const styles = styleMixer(baseStyles, theme);
    return (
        <div className={styles.rootWrapper}>
            <div className={styles.root}>
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <ContentBlock {...content} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
