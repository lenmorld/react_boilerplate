import React from 'react';
import Hello from '../Hello';

export default {
  title: 'Example/Hello',
  component: Hello
}

const Template = (args) => <Hello {...args} />;

export const Lenny = Template.bind({});
Lenny.args = { name: 'Lenny' };

export const Jessie = Template.bind({});
Jessie.args = { name: 'Jessie' };
