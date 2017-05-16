import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { G33k3ryLogo } from '../../src/components';
import { ServiceLinks } from '../../src/components';
import { GlobalRibbon, Hero } from '../../src/components';
import { Themes, PropMappers, StyleMappers, ChildDto } from '../../src/components';

import logoImage from '../../assets/g33k3rylogo2016_global.svg';
import bladeRunner2049 from '../../assets/bladerunner2049.png';

const demoLinks = [
  { href: '#', text: 'Games' },
  { href: '#', text: 'Movies & Tv' },
  { href: '#', text: 'Tech' },
  { href: '#', text: 'Comics' },
  { href: '#', text: 'Release Blog' }
];

const demoNavigation = {
  prevAction: () => alert('You Clicked Previous!'),
  prevLabel: "Prev",
  nextAction: () => alert('You Clicked Next'),
  nextLabel: "Next"
};

const demoOutRunNavigation = {
  prevAction: () => alert('You Clicked Previous!'),
  nextAction: () => alert('You Clicked Next')
};

const demoContentBlock = {
    header: "Bacon ipsum dolor amet drumstick leberkas frankfurter",
    body: "Bacon ipsum dolor amet drumstick leberkas frankfurter, t-bone kevin kielbasa short ribs alcatra. Rump tri-tip sirloin alcatra drumstick, swine tail flank prosciutto ball tip ground round cow pig kevin. Pork tongue prosciutto beef ribs picanha. Cow cupim shoulder kevin doner.",
    cta: "Read more",
    href: "#"
};

const serviceData = {
  twitter: { href:"#", label: "twitter" },
  rss: { href:"#", label: "rss" },
  tumblr: { href:"#", label: "tumblr" },
  youtube: { href:"#", label: "youtube" },
  facebook: { href:"#", label: "facebook" },
  twitch: { href:"#", label: "twitch" }
};

storiesOf('Organisms', module)
  .addWithChapters(
    'GlobalRibbon',
    {
      info: 'A Ribbon component used to display global links and branding.',
      chapters: [
        {
          title: 'Versions',
          info: 'Example versions of the GlobalRibbon',
          sections: [
            {
              title: 'Default',
              subtitle: 'GlobalRibbon - unstyled.',
              sectionFn: () => (<GlobalRibbon logo={logoImage} links={demoLinks} />),
              options: {
                showSource: true,
                allowSourceToggling: true,
                showPropTables: true,
                allowPropTablesToggling: true,
              }
            },
            {
              title: 'OutRun - Candycane',
              sectionFn: () => (<GlobalRibbon logo={logoImage} links={demoLinks} theme={Themes.GlobalRibbon.OutRunCandycane} />)
            }
          ]
        }
      ]
    }
  )
  .addWithChapters(
    'Hero',
    {
      info: 'A section of hero content',
      chapters: [
        {
          title: 'Versions',
          info: 'Example versions of the GlobalRibbon',
          sections: [
            {
              title: 'Default',
              subtitle: 'Hero - unstyled.',
              sectionFn: () => (
              <Hero 
                  backgroundImage="https://placeholdit.imgix.net/~text?txtsize=33&txt=1920%C3%971080&w=1920&h=1080"
                  content={demoContentBlock}
                  navigation={demoNavigation}
                >
                  <G33k3ryLogo key="left" />
                  <p key="right">Content goes here</p>
                </Hero>),
              options: {
                showSource: true,
                allowSourceToggling: true,
                showPropTables: true,
                allowPropTablesToggling: true,
              }
            },
            {
              title: 'OutRun',
              sectionFn: () => (
              <Hero 
                  theme={Themes.Hero.OutRun}
                  backgroundImage={bladeRunner2049}
                  content={demoContentBlock}
                  navigation={demoOutRunNavigation}
                >
                  <G33k3ryLogo key="left" />
                  <ServiceLinks services={serviceData} theme={Themes.ServiceLinks.OutRun_Pink} key="right" />
                </Hero>)
            }
          ]
        }
      ]
    }
  );