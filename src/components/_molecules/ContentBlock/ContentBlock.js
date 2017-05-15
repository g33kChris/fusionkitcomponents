import React from 'react';
import styleMixer from "@g33kchris/fusionkit-js-stylemixer";
import styleMappers from './styleMappers';
import { SubHeader, LinkButton, Paragraph } from '../../_atoms';
import baseStyles from './ContentBlock.css';

const ContentBlock = ({theme , header, body, cta, href}) => {
    const styles = styleMixer(baseStyles, theme);
    return(<div className={styles.root}>
                <div className={styles.titleHolder}>
                    <SubHeader theme={styleMappers.toSubHeader(styles)}>{ header }</SubHeader>
                </div>
                <div className={styles.textHolder}>
                    <Paragraph theme={styleMappers.toParagraph(styles)}>{ body }</Paragraph>
                </div>
                <LinkButton href={href} theme={styleMappers.toLinkButton(styles)}>
                    { cta }
                </LinkButton>
            </div>);
};

export default ContentBlock;