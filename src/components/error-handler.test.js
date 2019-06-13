import React from 'react'
import { mount } from 'enzyme';
import ErrorWrapper from './error-handler';
import { exportAllDeclaration } from '@babel/types';

const TrainWreck = () => {
    return this.definitely.will.break
}

it('renders a message when child crashes', () => {
    //we know there will be an error, so lets stop it from
    //polluting the console.
    const originalError = console.error
    console.error = () => {}

    const wrapper = mount(<ErrorWrapper>
        <TrainWreck/>
    </ErrorWrapper>)
    expect(wrapper.find(TrainWreck).length).toBe(0)
    expect(wrapper.text()).toContain(`¯\\_(ツ)_/¯`)

    //restore the definition so that other tests can use it.
    console.error = originalError
  })