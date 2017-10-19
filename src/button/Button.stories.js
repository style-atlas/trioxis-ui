import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button } from './';

const sharedProps = {
  onClick:action('clicked')
}

storiesOf('Button', module)
  .add('with text', () => <Button {...sharedProps}>Hello Button</Button>)
  .add('with multiline text', () => <Button {...sharedProps}>Hello<br/>Button</Button>)