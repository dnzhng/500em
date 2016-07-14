import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import Logo from '../../../../src/components/logo/Logo';

describe('<Logo />', () => {
  let logo;


  beforeEach(() => {
    logo = shallow(<Logo href="/"/>);
  })

  it('Should mount an svg to the dom', () => {
    expect(logo.find('svg')).to.have.length.above(0);
  });

  it('Should have classname logo', () => {
    expect(logo.find(".logo")).to.have.length(1);
  });

});
