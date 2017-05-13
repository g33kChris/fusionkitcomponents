import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { LinkButton, LivingLinkButton, Image } from '../../src/components';
import { Themes, PropMappers, StyleMappers, ChildDto } from '../../src/components';

import logoImage from '../../assets/g33k3rylogo2016_global.svg';

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
    'Image',
    {
      info: 'A reusable image component.',
      chapters: [
        {
          title: 'Versions',
          info: 'Example versions of the Image.',
          sections: [
            {
              title: 'Default',
              subtitle: 'Image - unstyled.',
              sectionFn: () => (<Image imageSrc={logoImage} />),
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