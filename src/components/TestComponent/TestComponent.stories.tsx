import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';
import { TestComponent } from './TestComponent.tsx';

const stories = storiesOf('TestComponent', module);

stories.add(
  'TestComponent',
  () => <TestComponent text={text('text', 'Some text')} />,
  {
    info: { inline: true },
    text: `

  ### Notes

  Simple example component

  ### Usage
  ~~~js
  <TestComponent
    text="Some text"
  />
  ~~~

`,
  }
);
