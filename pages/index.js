import React from 'react';
import Link from 'next/link';
import PodcastItem from '../components/podcast-item';

import '../scss/index.scss';

export default () => {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Next.js + Express</h1>
        <p>A simple app using Spotify API</p>
        <PodcastItem title={"aaaaaa"} />
        <p>
          <Link href="/search">
            <a className="btn btn-primary btn-lg" role="button">
              Use it !
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
};
