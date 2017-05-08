import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';

import {
  GlobalRibbon,
  LinkButton, 
  TimeCircuits,
  Themes } from '../src/components';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
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
    }

  storiesOf('TimeCircuits', module)
    .add('default', () => (
      <TimeCircuits {...TimeCircuitProps} />
    ));
