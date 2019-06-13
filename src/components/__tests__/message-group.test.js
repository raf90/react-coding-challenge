import React from 'react'
import { shallow } from 'enzyme';
import MessageGroup from '../message-group'
import MESSAGE_TYPES from '../../types/messages';
import MessageBox from '../message-box';

const MESSAGE = 'There\'s always money in the banana stand.'
const messages = [{message: MESSAGE, priority: MESSAGE_TYPES.Error, uuid: ':)'},
                  {message: MESSAGE, priority: MESSAGE_TYPES.Error, uuid: ':D'}]

it('renders without crashing', () => {
  const wrapper = shallow(<MessageGroup type={1} messages = {[]}/>)
})

it('renders message', () => {
  const wrapper = shallow(<MessageGroup messages = {messages.slice(1)} type={1}/>)
  expect(wrapper.find(MessageBox).length).toEqual(1)
  expect(wrapper.find(MessageBox).prop('message')).toEqual(MESSAGE)
  expect(wrapper.find(MessageBox).prop('priority')).toEqual(MESSAGE_TYPES.Error)
})

it('renders multiple messages', () => {
    const wrapper = shallow(<MessageGroup type={1} messages = {messages}/>)
    expect(wrapper.find(MessageBox).length).toEqual(2)
  })