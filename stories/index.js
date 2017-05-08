import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';

import { 
  GlobalRibbon,
  LinkButton, 
  TimeCircuits } from '../src/components';
// import { LinkButton } from '../dist';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('GlobalRibbon', module)
  .add('default', () => (
    <GlobalRibbon />
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
