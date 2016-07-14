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
    home = mount(<Home />);
  });

  it('should return a div with the proper class', () => {
    expect(home.find('.home')).to.have.length(1);
  })

  it('should handle infinite scrolling', () => {
    window.innerHeight = 500;
    document.body.clientHeight = 800;
    //initial loading should always be false
    expect(home.state().loading).to.be.falsy;
    home.instance().handleScroll();
    //did not scroll to the bottom, still false
    expect(home.state().loading).to.be.falsy;
    window.innerHeight = 1200;
    home.instance().handleScroll();
    //scrolled to the bottom, so loading is true
    expect(home.state().loading).to.be.truthy;
    home.instance().handleScroll();
    //still loading, so state does not change
    expect(home.state().loading).to.be.truthy;
  })

  it('should increment/decrement likes', () => {
    expect(home.state().liked.length).to.equal(0);
    home.instance().likeHandler(true, 1);
    expect(home.state().liked.length).to.equal(1);
    home.instance().likeHandler(false, 1);
    expect(home.state().liked.length).to.equal(0);
  })

  it('should toggle the showLiked state', () => {
    expect(home.state().showLikes).to.be.falsy;
    home.instance().showLikes();
    expect(home.state().showLikes).to.be.truthy;
    home.instance().showLikes();
    expect(home.state().showLikes).to.be.falsy;
  })

  it('should toggle the showNSFW state', () => {
    expect(home.state().showLikes).to.be.truthy;
    home.instance().toggleNSFW();
    expect(home.state().showLikes).to.be.falsy;
    home.instance().toggleNSFW();
    expect(home.state().showLikes).to.be.truthy;
  })
})
