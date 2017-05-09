import React from 'react';
import { HeaderRibbon } from '../../_molecules';

const LeftContent = () => (
    <p>This is where left content will be</p>
);

const RightContent = () => (
    <p>This is where the right content will be</p>
);

const GlobalRibbon = () => (
    <HeaderRibbon>
        <LeftContent key="left" />
        <RightContent key="right" />
    </HeaderRibbon>
);

export default GlobalRibbon;