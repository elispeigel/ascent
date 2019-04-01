import React from 'react';
import { storiesOf } from '@storybook/react';
import ToggleWrapper from '../ToggleWrapper';

storiesOf('ToggleWrapper', module)
  .add('displays', () => (
    <ToggleWrapper />
  ));