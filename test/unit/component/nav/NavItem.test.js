import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import NavItem from '../../../../src/components/nav/NavItem';

describe('<NavItem />', () => {
  let nav;


  beforeEach(() => {
    nav = shallow(<NavItem href="/"/>);
  })

  it('Should mount an a tag to the dom', () => {
    expect(nav.find('a')).to.have.length.above(0);
  });

  it('Should have classname nav-item', () => {
    expect(nav.find(".nav-item")).to.have.length(1);
  });

});
