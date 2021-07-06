import { shallow } from 'enzyme';
import React from 'react';
import App from '../../App';
import CommentBox from '@presentational/commentBox';

test('has a component', () => {
    const wrapper = shallow(<App/>)
    expect(wrapper.find(CommentBox).length).toEqual(1);
});