import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';
import css from './global.css';

import { Themes, PropMappers, StyleMappers } from '../src/components';

console.log('Themes Loaded: ', Themes);
console.log('PropMappers Loaded: ', PropMappers);
console.log('StyleMappers Loaded: ', StyleMappers);

import Atoms from './sections/Atoms';
import Molecules from './sections/Molecules';
import Organisms from './sections/Organisms';
import Specials from './sections/Specials';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));
