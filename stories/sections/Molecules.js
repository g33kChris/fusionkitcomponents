import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { LinkButton } from '../../src/components';
import { 
    LinkyList,
    CreeperRibbonRight,
    CreeperRibbonLeft,
    ContentBlock,
    NavButtons
 } from '../../src/components';
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
  )
  .addWithChapters(
    'CreeperRibbonLeft',
    {
      info: 'A Ribbon component with a small column creeping on the left,',
      chapters: [
        {
          title: 'Versions',
          info: 'Example versions of CreeperRibbonLeft.',
          sections: [
            {
              title: 'Default',
              subtitle: 'CreeperRibbonLeft - unstyled.',
              sectionFn: () => (<CreeperRibbonLeft>
                                    <p key="left">Content on the Left</p>
                                    <p key="right">Content on the right</p>
                                </CreeperRibbonLeft>),
              options: {
                showSource: true,
                allowSourceToggling: true,
                showPropTables: true,
                allowPropTablesToggling: true,
              }
            },
            {
              title: 'OutRun Blue',
              sectionFn: () => (<CreeperRibbonLeft theme={Themes.CreeperRibbonLeft.OutRun_Blue}>
                                    <p key="left">Content on the Left</p>
                                    <p key="right">Content on the right</p>
                                </CreeperRibbonLeft>),
            }
          ]
        }
      ]
    }
  )
  .addWithChapters(
    'ContentBlock',
    {
      info: 'A block of written content and a call to action.',
      chapters: [
        {
          title: 'Versions',
          info: 'Example versions of ContentBlock.',
          sections: [
            {
              title: 'Default',
              subtitle: 'ContentBlock - unstyled.',
              sectionFn: () => (<ContentBlock
                                  header="Bacon ipsum dolor amet drumstick leberkas frankfurter" 
                                  body="Bacon ipsum dolor amet drumstick leberkas frankfurter, t-bone kevin kielbasa short ribs alcatra. Rump tri-tip sirloin alcatra drumstick, swine tail flank prosciutto ball tip ground round cow pig kevin. Pork tongue prosciutto beef ribs picanha. Cow cupim shoulder kevin doner."
                                  cta="Read more"
                                  href="#"
                                />),
              options: {
                showSource: true,
                allowSourceToggling: true,
                showPropTables: true,
                allowPropTablesToggling: true,
              }
            },
            {
              title: 'OutRun Blue',
              sectionFn: () => (<ContentBlock
                                  header="Bacon ipsum dolor amet drumstick leberkas frankfurter" 
                                  body="Bacon ipsum dolor amet drumstick leberkas frankfurter, t-bone kevin kielbasa short ribs alcatra. Rump tri-tip sirloin alcatra drumstick, swine tail flank prosciutto ball tip ground round cow pig kevin. Pork tongue prosciutto beef ribs picanha. Cow cupim shoulder kevin doner."
                                  cta="Read more"
                                  href="#"
                                  theme={Themes.ContentBlock.OutRun_Blue}
                                />)
            }
          ]
        }
      ]
    }
  )
  .addWithChapters(
    'NavButtons',
    {
      info: 'A pair of Buttons to be used to Navigating previous and next.',
      chapters: [
        {
          title: 'Versions',
          info: 'Example versions of NavButtons.',
          sections: [
            {
              title: 'Default',
              subtitle: 'NavButtons - unstyled.',
              sectionFn: () => (<NavButtons 
                                  prevAction={() => alert('You Clicked Previous!')}
                                  prevLabel="Prev" 
                                  nextAction={() => alert('You Clicked Next')}
                                  nextLabel="Next"
                                />),
              options: {
                showSource: true,
                allowSourceToggling: true,
                showPropTables: true,
                allowPropTablesToggling: true,
              }
            },
            {
              title: 'MonoChromon',
              sectionFn: () => (<NavButtons 
                                  prevAction={() => alert('You Clicked Previous!')}
                                  prevLabel="Prev" 
                                  nextAction={() => alert('You Clicked Next!')}
                                  nextLabel="Next"
                                  theme={Themes.NavButtons.MonoChromon}
                                />)
            }
          ]
        }
      ]
    }
  );

  export default Molecules;