import React from 'react';
import { storiesOf } from '@storybook/react';
import CardList from '../CardList';

storiesOf('CardList', module)
  .add('default', () => (
    <CardList />
  ));