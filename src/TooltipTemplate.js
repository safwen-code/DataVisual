/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import StarsRating from 'react-star-rate'

export default function TooltipTemplate(info) {
  return (
    <div className="state-tooltip">
      <img href={info.point.data.image} width="60" height="40" />
      <h4 className="state">{info.argument}</h4>

      <div className="category">
        <span className="caption">Category</span>: {info.point.data.category}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span className="caption">Price : {info.point.data.price}</span>
        <span className="count">Count :{info.point.data.rating.count}</span>
        <StarsRating
          style={{ fontsize: '5px' }}
          value={info.point.data.rating.rate}
        />
      </div>
    </div>
  )
}
