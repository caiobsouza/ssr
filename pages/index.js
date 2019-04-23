import React from 'react';
import Link from 'next/link';
import PodcastItem from '../components/podcast-item';
import Button from '../components/button';

import '../scss/index.scss';

const Index = () => {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Next.js + Express</h1>
        <p>A simple app using Spotify API</p>
        <PodcastItem title={'aaaaaa'} />
        <p>
          <Link href="/search">
            asdfasdfasdf
          </Link>
        </p>
        <Button href="#" label="Use It!" type="primary" />
      </div>
    </div>
  );
};

export default Index;
