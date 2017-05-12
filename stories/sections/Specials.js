import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { Specials } from '../../src/components';
import { Themes, PropMappers, StyleMappers, ChildDto } from '../../src/components';

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
};

storiesOf('TimeCircuits', module)
  .add('default', () => (
    <TimeCircuits {...TimeCircuitProps} />
  ));
