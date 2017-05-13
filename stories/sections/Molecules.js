import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { LinkButton } from '../../src/components';
import { LinkyList, CreeperRibbonRight } from '../../src/components';
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
    'LinkyList',
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
  )
  .addWithChapters(
    'CreeperRibbonRight',
    {
      info: 'A Ribbon component with a small column creeping on the right,',
      chapters: [
        {
          title: 'Versions',
          info: 'Example versions of CreeperRibbonRight.',
          sections: [
            {
              title: 'Default',
              subtitle: 'CreeperRibbonRight - unstyled.',
              sectionFn: () => (<CreeperRibbonRight>
                                    <p key="left">Content on the Left</p>
                                    <p key="right">Content on the right</p>
                                </CreeperRibbonRight>),
              options: {
                showSource: true,
                allowSourceToggling: true,
                showPropTables: true,
                allowPropTablesToggling: true,
              }
            },
            {
              title: 'OutRun Blue',
              sectionFn: () => (<CreeperRibbonRight theme={Themes.CreeperRibbonRight.OutRun_Blue}>
                                    <p key="left">Content on the Left</p>
                                    <p key="right">Content on the right</p>
                                </CreeperRibbonRight>),
            }
          ]
        }
      ]
    }
  );

  export default Molecules;