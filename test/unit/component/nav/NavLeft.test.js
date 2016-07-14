import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import NavLeft from '../../../../src/components/nav/NavLeft';

describe('<NavLeft />', () => {
  let nav;


  beforeEach(() => {
    nav = shallow(<NavLeft />);
  })

  it('Should mount a div within a div to the dom', () => {
    expect(nav.find('div')).to.have.length.above(0);
  });

  it('Should have classname nav-left', () => {
    expect(nav.find(".nav-left")).to.have.length(1);
  });

});
