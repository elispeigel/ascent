import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../Button';

storiesOf('Button', module)
  .add('with text', () => (
    <Button title="Ascent UI"/>
  ))
  .add('with emoji', () => (
    <Button title="😀"/>
  ));  