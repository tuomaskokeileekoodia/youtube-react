import React from 'react';
import {shallow} from 'enzyme/build';
import HeaderNav from '../HeaderNav';

test('renders HeaderNav', () => {
    const wrapper = shallow(
        <HeaderNav />
    );
    expect(wrapper).toMatchSnapshot();
});

