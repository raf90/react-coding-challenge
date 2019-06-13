import React from 'react'
import { mount } from 'enzyme';
import MessageList from '../message-list';

it('renders without crashing', () => {
    const wrapper = mount(<MessageList/>)
  })