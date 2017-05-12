import React from 'react';
import recompose from 'recompose';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';
import css from './global.css';

import logoImage from '../assets/g33k3rylogo2016_global.svg';

import { 
  LinkButton,
  LivingLinkButton
 } from '../src/components';
 import { 
  LinkyList
 } from '../src/components';
import {
  GlobalRibbon,
  LogoImage,
  TimeCircuits,
  Themes,
  PropMappers,
  StyleMappers,
  ChildDto
 } from '../src/components';

console.log('Themes Loaded: ', Themes);
console.log('PropMappers Loaded: ', PropMappers);
console.log('StyleMappers Loaded: ', StyleMappers);

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Atoms', module)
  .addWithChapters(
    'LinkButton',
    {
      info: 'A link which looks like a button in the browser. A LinkButton is 100% width of its container with uppercase test in the middle (styles can be overidden using themes).',
      chapters: [
        {
          title: 'Versions',
          info: 'Example versions of the LinkButton',
          sections: [
            {
              title: 'Default',
              subtitle: 'LinkButton - unstyled.',
              sectionFn: () => (<LinkButton href="#">Example Link Button</LinkButton>),
              options: {
                showSource: true,
                allowSourceToggling: true,
                showPropTables: true,
                allowPropTablesToggling: true,
              }
            },
            {
              title: 'OutRun Blue',
              sectionFn: () => (<LinkButton theme={Themes.LinkButton.OutRun_Blue} href="#">Example Link Button</LinkButton>)
            },
            {
              title: 'OutRun Pink',
              sectionFn: () => (<LinkButton theme={Themes.LinkButton.OutRun_Pink} href="#">Example Link Button</LinkButton>)
            }
          ]
        }
      ]
    }
  )
  .addWithChapters(
    'LivingLinkButton',
    {
      info: 'A link which looks like a button in the browser and has an internal animated effect on click (styles can be overidden using themes).',
      chapters: [
        {
          title: 'Versions',
          info: 'Example versions of the LivingLinkButton',
          sections: [
            {
              title: 'Default',
              subtitle: 'LivingLinkButton - unstyled.',
              sectionFn: () => (<LivingLinkButton href="#">Example Link Button</LivingLinkButton>),
              options: {
                showSource: true,
                allowSourceToggling: true,
                showPropTables: true,
                allowPropTablesToggling: true,
              }
            },
            {
              title: 'Tamerial Blue',
              sectionFn: () => (<LinkButton theme={Themes.LivingLinkButton.Tamerial_Blue} href="#">Example Link Button</LinkButton>)
            }
          ]
        }
      ]
    }
  )
  .addWithChapters(
    'LogoImage',
    {
      subtitle: 'A Header Ribbon Component',
      info: 'Some other info',
      chapters: [
        // List of chapters. Refer to Configuration Format section. 
        {
          title: 'Chapter Title',
          subtitle: 'Chapter Subtitle',
          info: 'Chapter Info',
          sections: [
            {
              title: 'Section Title',
              subtitle: 'Section subtitle',
              info: 'Section info',
              sectionFn: () => (<LogoImage />),
              options: {
                showSource: true,
                allowSourceToggling: true,
                showPropTables: true,
                allowPropTablesToggling: true,
              }
            }
          ]
        }
      ]
    }
  );

const linkData = [
  { href:"#", text: 'This is a test link' },
  { href:"#", text: 'This is a test link' },
  { href:"#", text: 'This is a test link' },
  { href:"#", text: 'This is a test link' },
  { href:"#", text: 'This is a test link' },
  { href:"#", text: 'This is a test link' },
  { href:"#", text: 'This is a test link' }
];

const LinkyList_ListButton = 
  new ChildDto (
    LinkButton,
    StyleMappers.LinkyList.toLinkButton,
    PropMappers.LinkyList.toLinkButton
  );

storiesOf('Molecules', module)
  .addWithChapters(
    'LinkList',
    {
      info: 'A list of link data driven components.',
      chapters: [
        {
          title: 'Versions',
          info: 'Example versions of the LinkButton.',
          sections: [
            {
              title: 'Default',
              subtitle: 'LinkyList with LinkButtons - unstyled.',
              sectionFn: () => (<LinkyList itemDto={LinkyList_ListButton} items={linkData} />),
              options: {
                showSource: true,
                allowSourceToggling: true,
                showPropTables: true,
                allowPropTablesToggling: true,
              }
            },
            {
              title: 'OutRun Blue',
              sectionFn: () => (<LinkyList itemDto={LinkyList_ListButton} items={linkData} theme={Themes.LinkyList.OutRun_Blue} />),
            }
          ]
        }
      ]
    }
  );

  // .add('all', () => (
  //   <HeaderRibbon />
  // ));

/*storiesOf('Organisms', module)
  .add('all', () => (
    <HeaderRibbon />
  ));

storiesOf('GlobalRibbon', module)
  .add('default', () => (
    <GlobalRibbon leftContent="This is where the left content lives." rightContent="This is where the right content lives." />
  ))
  .add('OutRun_Candycane theme', () => (
    <GlobalRibbon 
      leftContent="This is a the global ribbon using the outrun Candycane theme" 
      rightContent="This is a the global ribbon using the outrun Candycane theme."
      theme={Themes.GlobalRibbon.OutRunCandycane}
    />
  ))
  .add('OutRun_SkyBlue theme', () => (
    <GlobalRibbon 
      leftContent="This is a the global ribbon using the outrun skyblue theme" 
      rightContent="This is a the global ribbon using the outrun skyblue theme."
      theme={Themes.GlobalRibbon.OutRunSkyBlue}
    />
  ))
  .add('example content (CandyCane)', () => (
    <GlobalRibbon
      leftContent={<LogoImage imageSrc={logoImage} />}
      rightContent="This is where the right content lives."
      theme={Themes.GlobalRibbon.OutRunCandycane} />
  ))
  .add('example content (SkyBlue)', () => (
    <GlobalRibbon
      leftContent={<LogoImage imageSrc={logoImage} />}
      rightContent="This is where the right content lives."
      theme={Themes.GlobalRibbon.OutRunSkyBlue} />
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));

storiesOf('LinkButton', module)
  .add('with text', () => (
    <LinkButton href="#">Example Link Button</LinkButton>
  ));

storiesOf('LogoImage', module)
  .add('with example svg', () => (
    <LogoImage imageSrc={logoImage} />
  ));*/

const TimeCircuitProps = {
  whereYoureGoing: {
    date: new Date(),
    label: "Destination Time"
  },
  whereYouAre: {
    date: new Date(),
    label: "Present Time"
  },
  whereYouWere: {
    date: new Date(),
    label: "Time Departed"
  }
};

storiesOf('TimeCircuits', module)
  .add('default', () => (
    <TimeCircuits {...TimeCircuitProps} />
  ));
