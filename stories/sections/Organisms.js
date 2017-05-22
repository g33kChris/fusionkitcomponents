import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { G33k3ryLogo } from '../../src/components';
import { ServiceLinks } from '../../src/components';
import { GlobalRibbon, HeaderRibbon, Hero, NavRibbon, FeaturedItems } from '../../src/components';
import { Themes, PropMappers, StyleMappers, ChildDto } from '../../src/components';

import logoImage from '../../assets/g33k3rylogo2016_global.svg';
import bladeRunner2049 from '../../assets/bladerunner2049.png';
import ghostInTheShell from '../../assets/ghostintheshell.jpg';
import bttf2 from '../../assets/bttf2.jpg';

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

const featuredItemData = [
  {
    header: "Bacon ipsum dolor amet drumstick leberkas frankfurter",
    body: "Bacon ipsum dolor amet drumstick leberkas frankfurter, t-bone kevin kielbasa short ribs alcatra. Rump tri-tip sirloin alcatra drumstick, swine tail flank prosciutto ball tip ground round cow pig kevin. Pork tongue prosciutto beef ribs picanha. Cow cupim shoulder kevin doner.",
    date: "28/04/2017 - 3:00pm",
    cta: "Read more",
    href: "#"
  },
  {
    header: "Bacon ipsum dolor amet drumstick leberkas frankfurter",
    body: "Bacon ipsum dolor amet drumstick leberkas frankfurter, t-bone kevin kielbasa short ribs alcatra. Rump tri-tip sirloin alcatra drumstick, swine tail flank prosciutto ball tip ground round cow pig kevin. Pork tongue prosciutto beef ribs picanha. Cow cupim shoulder kevin doner.",
    date: "28/04/2017 - 3:00pm",
    cta: "Read more",
    href: "#"
  },
  {
    header: "Bacon ipsum dolor amet drumstick leberkas frankfurter",
    body: "Bacon ipsum dolor amet drumstick leberkas frankfurter, t-bone kevin kielbasa short ribs alcatra. Rump tri-tip sirloin alcatra drumstick, swine tail flank prosciutto ball tip ground round cow pig kevin. Pork tongue prosciutto beef ribs picanha. Cow cupim shoulder kevin doner.",
    date: "28/04/2017 - 3:00pm",
    cta: "Read more",
    href: "#"
  }
];

const outrunFeaturedItemData = [
  {
    header: "Bacon ipsum dolor amet drumstick leberkas frankfurter",
    body: "Bacon ipsum dolor amet drumstick leberkas frankfurter, t-bone kevin kielbasa short ribs alcatra. Rump tri-tip sirloin alcatra drumstick, swine tail flank prosciutto ball tip ground round cow pig kevin. Pork tongue prosciutto beef ribs picanha. Cow cupim shoulder kevin doner.",
    date: "28/04/2017 - 3:00pm",
    cta: "Read more",
    href: "#",
    backgroundImage: ghostInTheShell
  },
  {
    header: "Bacon ipsum dolor amet drumstick leberkas frankfurter",
    body: "Bacon ipsum dolor amet drumstick leberkas frankfurter, t-bone kevin kielbasa short ribs alcatra. Rump tri-tip sirloin alcatra drumstick, swine tail flank prosciutto ball tip ground round cow pig kevin. Pork tongue prosciutto beef ribs picanha. Cow cupim shoulder kevin doner.",
    date: "28/04/2017 - 3:00pm",
    cta: "Read more",
    href: "#",
    backgroundImage: bladeRunner2049
  },
  {
    header: "Bacon ipsum dolor amet drumstick leberkas frankfurter",
    body: "Bacon ipsum dolor amet drumstick leberkas frankfurter, t-bone kevin kielbasa short ribs alcatra. Rump tri-tip sirloin alcatra drumstick, swine tail flank prosciutto ball tip ground round cow pig kevin. Pork tongue prosciutto beef ribs picanha. Cow cupim shoulder kevin doner.",
    date: "28/04/2017 - 3:00pm",
    cta: "Read more",
    href: "#",
    backgroundImage: bttf2
  }
];


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
    'HeaderRibbon',
    {
      info: 'A Ribbon component used as a header for  site.',
      chapters: [
        {
          title: 'Versions',
          info: 'Example versions of the HeaderRibbon',
          sections: [
            {
              title: 'Default',
              subtitle: 'HeaderRibbon - unstyled.',
              sectionFn: () => (
                <HeaderRibbon services={serviceData}>
                  <G33k3ryLogo />
                </HeaderRibbon>
              
              ),
              options: {
                showSource: true,
                allowSourceToggling: true,
                showPropTables: true,
                allowPropTablesToggling: true,
              }
            },
            {
              title: 'OutRun Blue',
              sectionFn: () => (
                <HeaderRibbon services={serviceData} theme={Themes.HeaderRibbon.OutRun}>
                  <G33k3ryLogo />
                </HeaderRibbon>)
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
                  <p>Top ribbon starts heres</p>
                </Hero>),
              options: {
                showSource: true,
                allowSourceToggling: true,
                showPropTables: true,
                allowPropTablesToggling: true,
              }
            },
            {
              title: 'With a Header Ribbon',
              sectionFn: () => (
              <Hero
                  backgroundImage="https://placeholdit.imgix.net/~text?txtsize=33&txt=1920%C3%971080&w=1920&h=1080"
                  content={demoContentBlock}
                  navigation={demoNavigation}
                >
                  <HeaderRibbon services={serviceData}>
                    <G33k3ryLogo />
                  </HeaderRibbon>
                </Hero>)
            },
            {
              title: 'With a Global Ribbon',
              sectionFn: () => (
              <Hero
                  backgroundImage="https://placeholdit.imgix.net/~text?txtsize=33&txt=1920%C3%971080&w=1920&h=1080"
                  content={demoContentBlock}
                  navigation={demoNavigation}
                >
                  <GlobalRibbon logo={logoImage} links={demoLinks} />
                </Hero>)
            },
            {
              title: 'OutRun (HeaderRibbon)',
              sectionFn: () => (
              <Hero 
                  theme={Themes.Hero.OutRun}
                  backgroundImage={bladeRunner2049}
                  content={demoContentBlock}
                  navigation={demoOutRunNavigation}
                >
                  <HeaderRibbon services={serviceData} theme={Themes.HeaderRibbon.OutRun}>
                    <G33k3ryLogo />
                  </HeaderRibbon>
                </Hero>)
            },
            {
              title: 'OutRun (GlobalRibbon - CandyCane)',
              sectionFn: () => (
              <Hero 
                  theme={Themes.Hero.OutRun}
                  backgroundImage={ghostInTheShell}
                  content={demoContentBlock}
                  navigation={demoOutRunNavigation}
                >
                  <GlobalRibbon logo={logoImage} links={demoLinks} theme={Themes.GlobalRibbon.OutRunCandycane} />
                </Hero>)
            },
            {
              title: 'OutRun (GlobalRibbon - OutRun Skyblue)',
              sectionFn: () => (
              <Hero 
                  theme={Themes.Hero.OutRun}
                  backgroundImage={bttf2}
                  content={demoContentBlock}
                  navigation={demoOutRunNavigation}
                >
                  <GlobalRibbon logo={logoImage} links={demoLinks} theme={Themes.GlobalRibbon.OutRunSkyBlue} />
                </Hero>)
            }
          ]
        }
      ]
    }
  )
  .addWithChapters(
    'NavRibbon',
    {
      info: 'A Ribbon component used for Navigation links.',
      chapters: [
        {
          title: 'Versions',
          info: 'Example versions of the NavRibbon',
          sections: [
            {
              title: 'Default',
              subtitle: 'NavRibbon - unstyled.',
              sectionFn: () => (<NavRibbon links={demoLinks} />),
              options: {
                showSource: true,
                allowSourceToggling: true,
                showPropTables: true,
                allowPropTablesToggling: true,
              }
            },
            {
              title: 'OutRun',
              sectionFn: () => (<NavRibbon links={demoLinks} theme={Themes.NavRibbon.OutRun} />)
            }
          ]
        }
      ]
    }
  )
  .addWithChapters(
    'FeaturedItems',
    {
      info: 'A component with a collection of featured content.',
      chapters: [
        {
          title: 'Versions',
          info: 'Example versions of the FeaturedItems',
          sections: [
            {
              title: 'Default',
              subtitle: 'FeaturedItems - unstyled.',
              sectionFn: () => (<FeaturedItems items={featuredItemData} />),
              options: {
                showSource: true,
                allowSourceToggling: true,
                showPropTables: true,
                allowPropTablesToggling: true,
              }
            },
            {
              title: 'OutRun',
              sectionFn: () => (<FeaturedItems items={outrunFeaturedItemData} theme={Themes.FeaturedItems.OutRun} />),
            }
          ]
        }
      ]
    }
  );