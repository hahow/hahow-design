import React from 'react';
import { storiesOf } from '@storybook/react';

import Checkbox from './Checkbox';

storiesOf('Checkbox', module)
  .add('default', () => <Checkbox name="vehicle1" value="Bike" />)
  .add('pinned', () => <Checkbox name="vehicle2" value="Car" />)
  .add('archived', () => <Checkbox name="vehicle3" value="Boat" checked />);