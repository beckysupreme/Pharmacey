import React from 'react'

export default function Art() {
  const abebe=['a','b','c','d'];
  return (
    <div>
      {
        abebe.map((number,index)=> <h1 key="index">{number}</h1>)
      }
    </div>
  )
}
