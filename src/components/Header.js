import React from 'react';

export default function Header() {
  return (
    <div className="Header">
      <div className="Header-blog-name">
        {/* TODO: Link to my other blog, special for blogging */}
        <p>Blog</p>
      </div>
      <div className="Header-menu">
        <li className="Header-menu-list">
          <a href="#Profile">Who am I?</a>
          <a href="#WhyChooseMe">Why choose me?</a>
        </li>
      </div>
    </div>
  );
}
