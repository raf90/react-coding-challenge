import React from 'react'
import { mount } from 'enzyme'
import withSnackBar from '../with-snackbar'
import { Snackbar } from '@material-ui/core';

const Foo = () => <div></div>
const FooWithSnack = withSnackBar(Foo)

it('renders without crashing', () => {
    const wrapper = mount(<FooWithSnack/>)
  })

it('renders Foo and Snackbar', () => {
const wrapper = mount(<FooWithSnack/>)
expect(wrapper.find(Foo).length).toEqual(1)
expect(wrapper.find(Snackbar).length).toEqual(1)
})

it('passes props down to child', () => {
    const wrapper = mount(<FooWithSnack foo={'bar'}/>)
    expect(wrapper.find(Foo).length).toEqual(1)
    expect(wrapper.find(Foo).prop('foo')).toEqual('bar')
})