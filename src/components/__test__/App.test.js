import { shallow } from 'enzyme';
import React from 'react';
import App from 'App';
import CommentBox from '@presentational/commentBox';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<App/>);
});

test('has a component', () => {
    expect(wrapper.find(CommentBox).length).toEqual(1);
});