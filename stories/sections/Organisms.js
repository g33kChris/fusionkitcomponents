import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { GlobalRibbon } from '../../src/components';
import { Themes, PropMappers, StyleMappers, ChildDto } from '../../src/components';

import logoImage from '../../assets/g33k3rylogo2016_global.svg';

const demoLinks = [
  { href: '#', text: 'Games' },
  { href: '#', text: 'Movies & Tv' },
  { href: '#', text: 'Tech' },
  { href: '#', text: 'Comics' },
  { href: '#', text: 'Release Blog' }
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
            }
          ]
        }
      ]
    }
  );