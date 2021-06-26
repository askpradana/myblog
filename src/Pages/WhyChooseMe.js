import React, { Component } from 'react';
import ClickableBox from '../components/ClickableBox';

export default class WhyChooseMe extends Component {
  render() {
    const penjelasan = {
      satu: 'You want some quick website that can be done in a day? OK, or You want some website that you can edit every part oft it? sure!',
      dua: 'You have weird request that you think thats kinda weird? be not afraid friends. Or theres something You want to ask but it`s hard for you to explain? Let`s find out what you want really.',
      tiga: 'You want to have maintained website? sure, You want to have another project? Well, I can help',
    };
    return (
      <div className="WhyChooseMe-body" id="WhyChooseMe">
        <div className="WhyChooseMe-wrapper">
          <div className="WhyChooseMe-header">
            <h1>Ill give you these</h1>
          </div>
          <dic className="WhyChooseMe-main">
            {/* TODO: Ubah onclick biar ada transisinya */}
            <ClickableBox
              className="WhyChooseMe-one"
              title="Personal Touch"
              penjelasan={penjelasan.satu}
            />
            <ClickableBox
              className="WhyChooseMe-two"
              title="Friendly Assist"
              penjelasan={penjelasan.dua}
            />
            <ClickableBox
              className="WhyChooseMe-three"
              title="Future Conenction"
              penjelasan={penjelasan.tiga}
            />
          </dic>
        </div>
      </div>
    );
  }
}
