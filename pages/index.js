import React from 'react';
import Link from 'next/link';
import PodcastItem from '../components/podcast-item';
import Button from '../components/button';

import '../scss/index.scss';

const Index = () => {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Mosaico Igreja</h1>
        <p>A simple app using Spotify API</p>
        <PodcastItem title={'O SSH de Jonathas funciona'} />
        <p>
          <Link href="/search">
            <a>asdfasdfasdf</a>
          </Link>
        </p>
        <Button href="#" label="Use It!" type="primary" />
      </div>
    </div>
  );
};

export default Index;
