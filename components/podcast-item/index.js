import React from 'react'

import './scss/_podcast-item.scss';

export default function PodcastItem({title}) {
  return (
    <div className="podcast">
      {title}
    </div>
  )
}
