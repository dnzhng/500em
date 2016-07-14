import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import NavRight from '../../../../src/components/nav/NavRight';

describe('<NavRight />', () => {
  let nav;


  beforeEach(() => {
    nav = shallow(<NavRight />);
  })

  it('Should mount a div within a div to the dom', () => {
    expect(nav.find('div')).to.have.length.above(0);
  });

  it('Should have classname nav-right', () => {
    expect(nav.find(".nav-right")).to.have.length(1);
  });

});
