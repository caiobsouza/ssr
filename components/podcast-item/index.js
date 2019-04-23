import React from 'react';

import './scss/_podcast-item.scss';

// eslint-disable-next-line react/prop-types
export default function PodcastItem({title}) {
  return (
    <div className="podcast">
      {title}
    </div>
  );
}
