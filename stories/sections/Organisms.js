import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { GlobalRibbon, Hero } from '../../src/components';
import { Themes, PropMappers, StyleMappers, ChildDto } from '../../src/components';

import logoImage from '../../assets/g33k3rylogo2016_global.svg';

const demoLinks = [
  { href: '#', text: 'Games' },
  { href: '#', text: 'Movies & Tv' },
  { href: '#', text: 'Tech' },
  { href: '#', text: 'Comics' },
  { href: '#', text: 'Release Blog' }
];

const demoContentBlock = {
    header: "Bacon ipsum dolor amet drumstick leberkas frankfurter",
    body: "Bacon ipsum dolor amet drumstick leberkas frankfurter, t-bone kevin kielbasa short ribs alcatra. Rump tri-tip sirloin alcatra drumstick, swine tail flank prosciutto ball tip ground round cow pig kevin. Pork tongue prosciutto beef ribs picanha. Cow cupim shoulder kevin doner.",
    cta: "Read more",
    href: "#"
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
              sectionFn: () => (<Hero content={demoContentBlock} />),
              options: {
                showSource: true,
                allowSourceToggling: true,
                showPropTables: true,
                allowPropTablesToggling: true,
              }
            },
            {
              title: 'OutRun',
              sectionFn: () => (<Hero theme={Themes.Hero.Outrun} />)
            }
          ]
        }
      ]
    }
  );