import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import Tile from '../../../../src/components/tiles/Tile';

describe('<Tile />', () => {
  let tile;


  beforeEach(() => {
    tile = mount(<Tile name="name"
                          views={23}
                          image="image/url.jpg"
                          likeHandler={()=>{return 5}}/>);
  })

  it('should pass the proper props in', () => {
    expect(tile.prop("name")).to.equal("name");
    expect(tile.prop("views")).to.equal(23);
    expect(tile.prop("image")).to.equal("image/url.jpg");
    expect(tile.prop("likeHandler")()).to.equal(5);
  })

  it('Should mount a div to the dom', () => {
    expect(tile.find('div')).to.have.length.above(0);
  });

  it('Should have classname tile', () => {
    expect(tile.find(".tile")).to.have.length(1);
  });

  it('Should toggle likes when the icon is clicked', () => {
    expect(tile.state.liked).to.be.falsy;
    let icon = tile.find('i');
    icon.simulate('click');
    expect(tile.state.liked).to.be.truthy;
    icon.simulate('click');
    expect(tile.state.liked).to.be.falsy;
  })


});
