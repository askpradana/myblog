import React, { Component } from 'react';
import picture from '../images/profile.png';

export default class Profile extends Component {
  render() {
    const link = [
      'https://twitter.com/ratakiricui',
      'mailto:askpradana@gmail.com',
    ];
    return (
      <div className="Profile" id="Profile">
        <div className="Profile-wrapper">
          <div className="Gambar">
            <img src={picture} alt="profileimg" />
          </div>
          <div className="Data">
            <div className="Data-personal">
              <p>
                Naufaldy pradana was once a mobile developer, and currently he
                learn for web development that follow minimalist, clutter-free
                concept.
              </p>
              <p>
                If You want send personal message, send me a direct message on{' '}
                <a href={link[0]}>twitter</a>
              </p>
            </div>
            <div className="Data-business">
              <p>For business things, mail to:</p>
              <a href={link[1]}>askpradana@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
