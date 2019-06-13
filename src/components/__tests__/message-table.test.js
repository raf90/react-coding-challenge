import React from 'react'
import { shallow } from 'enzyme';
import MessageTable from '../message-table';
import MESSAGE_TYPES from '../../types/messages';
import MessageGroup from '../message-group';

const MESSAGE = 'There\'s always money in the banana stand.';
const messages = [  {message: MESSAGE, priority: MESSAGE_TYPES.Info, uuid: ':D'}, 
                    {message: MESSAGE, priority: MESSAGE_TYPES.Warning, uuid: ':|'}, 
                    {message: MESSAGE, priority: MESSAGE_TYPES.Error, uuid: ':('}]

it('renders without crashing', () => {
    const wrapper = shallow(<MessageTable messages={messages} clearMessage={()=>{}}/>)
  })

  it('renders with one message in each group when has one message of each priority', () => {
    const wrapper = shallow(<MessageTable messages={messages} clearMessage={()=>{}}/>)
    const messageGroups = wrapper.find(MessageGroup)

    expect(messageGroups.length).toEqual(3)
    expect(messageGroups.find({ priority: MESSAGE_TYPES.Info }).prop('messages').length).toEqual(1)
    expect(messageGroups.find({ priority: MESSAGE_TYPES.Warning }).prop('messages').length).toEqual(1)
    expect(messageGroups.find({ priority: MESSAGE_TYPES.Error }).prop('messages').length).toEqual(1)
  })