import React, { Component } from 'react';
import Footer from './Footer';
import MainPage from './MainPage';
import Profile from './Profile';
import WhyChooseMe from './WhyChooseMe';

export default class Caller extends Component {
  render() {
    return (
      <div>
        <MainPage />
        <WhyChooseMe />
        <Profile />
        <Footer />
      </div>
    );
  }
}
