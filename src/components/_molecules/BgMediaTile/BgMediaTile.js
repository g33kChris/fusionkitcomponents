import React from 'react';
import styleMixer from "@g33kchris/fusionkit-js-stylemixer";
import styleMappers from './styleMappers';
import { SubHeader, Paragraph, LinkButton } from '../../_atoms';
import baseStyles from './BgMediaTile.css';


const BgMediaTile = ({ 
    theme,
    backgroundImage,
    header,
    body,
    date,
    cta,
    href
}) => {
    const styles = styleMixer(baseStyles, theme);
    return (
        <div className={styles.root} style={{backgroundImage:`url(${backgroundImage})`}}>
            <div className={styles.header}>
                <SubHeader theme={styleMappers.toSubHeader(styles)}>
                    { header }
                </SubHeader>
            </div>
            <div className={styles.content}>
                <div className={styles.description}>
                    <Paragraph theme={styleMappers.toParagraph(styles)}>
                        { body }
                    </Paragraph>
                </div>
                <div className={styles.description}>
                    <Paragraph theme={styleMappers.toParagraph(styles)}>
                        { date }
                    </Paragraph>
                </div>
                <LinkButton href={href} theme={styleMappers.toLinkButton(styles)}>{ cta }</LinkButton>
            </div>
        </div>
    );
};

export default BgMediaTile;


{/*
        
            
            
            
        </div>*/}

