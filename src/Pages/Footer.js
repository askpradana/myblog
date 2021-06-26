import React from 'react';

export default function Footer() {
  let twitter = 'https://twitter.com/ratakiricui';
  let linkedIn = 'https://www.linkedin.com/in/naufaldy-pradana-9800831b6/';
  let github = 'https://github.com/askpradana';
  let instagram = 'https://www.instagram.com/nfldyprdn/';
  return (
    <div className='Footer'>
      <div className='Footer-wrapper'>
        <div className='Footer-left' />
        <div className='Footer-main'>
          <div className='Footer-main-icon'>
            <a href={instagram}>
              <i class='fab fa-instagram'></i>
            </a>
            <a href={twitter}>
              <i class='fab fa-twitter-square' />
            </a>
            <a href={linkedIn}>
              <i class='fab fa-linkedin'></i>
            </a>
            <a href={github}>
              <i class='fab fa-github-square'></i>
            </a>
          </div>
        </div>
        <div className='Footer-right' />
      </div>
    </div>
  );
}
