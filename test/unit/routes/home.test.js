/**
 * External Modules
 */
import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Internal Modules
 */
import Home from '../../../src/routes/home.js';

describe('<Home />', () => {
  let home;

  beforeEach(() => {
    home = shallow(<Home />);
  });

  it('should return a div with the proper class', () => {
    expect(home.find('.home')).to.have.length(1);
  })
})
