import React from 'react'

export const Post = ({ data }) => {
  return (
        <div>
            {data.map((item) => (
            <div key={item.id}>
                <h1>{item.title}</h1>
                <p>{item.text}</p>
            </div>
            ))}
         </div>
  )
}