import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import Nav from '../../../../src/components/nav/Nav';

describe('<Nav />', () => {
  let nav;


  beforeEach(() => {
    nav = shallow(<Nav height={50} />);
  })

  it('Should mount a div within a div to the dom', () => {
    expect(nav.find('div')).to.have.length.above(0);
  });

  it('Should have classname nav', () => {
    expect(nav.find(".nav")).to.have.length(1);
  });

  it('Should have correct props', () => {
    expect(nav.props.height).to.be.truthy;
  });

});
