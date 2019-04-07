import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '../Card';

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum consectetur odio, nec volutpat eros tincidunt et. Quisque dolor libero, efficitur vitae laoreet vel, pretium id quam. Fusce ut diam cursus ligula pellentesque dapibus. Integer maximus felis eu ante viverra, sed fermentum lacus cursus. Aenean sit amet maximus augue. Nulla sodales diam eu dui mollis ultrices. Aenean ultricies quam vel pharetra bibendum. Maecenas volutpat blandit magna, ut tincidunt augue fringilla eget. Praesent a laoreet turpis. Ut id orci et nisl accumsan blandit. Ut sit amet odio in ipsum tincidunt laoreet. Ut efficitur, lectus sit amet commodo interdum, dolor est egestas.';

storiesOf('Card', module)
  .add('with text', () => (
    <Card title="Ascent UI" body={lorem}/>
  ));