import React from 'react'
import { mount } from 'enzyme';
import MessageBox from '../message-box'
import MESSAGE_TYPES from '../../types/messages';
import { Paper } from '@material-ui/core';

const MESSAGE = 'There\'s always money in the banana stand.';

it('renders without crashing', () => {
  const wrapper = mount(<MessageBox message = {MESSAGE}/>)
})

it('renders message from object passed to it', () => {
  const wrapper = mount(<MessageBox message = {MESSAGE} priority={MESSAGE_TYPES.Error}/>)
  expect(wrapper.text()).toContain(MESSAGE)
})

it('renders correct colors for messages', () => {
  const error = mount(<MessageBox message = {MESSAGE} priority={MESSAGE_TYPES.Error}/>),
        info = mount(<MessageBox message = {MESSAGE} priority={MESSAGE_TYPES.Warning}/>),
        warning = mount(<MessageBox message = {MESSAGE} priority={MESSAGE_TYPES.Info}/>)

  expect(error.find(Paper).prop('style').backgroundColor).toEqual('#F56236')
  expect(info.find(Paper).prop('style').backgroundColor).toEqual('#FCE788')
  expect(warning.find(Paper).prop('style').backgroundColor).toEqual('#88FCA3')
})