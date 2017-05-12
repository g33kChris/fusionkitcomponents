import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { LinkButton } from '../../src/components';
import { LinkyList } from '../../src/components';
import { Themes, PropMappers, StyleMappers, ChildDto } from '../../src/components';

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

const Molecules = storiesOf('Molecules', module)
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

  export default Molecules;