import React from 'react'
import styled from 'styled-components'

const Thumbnail = styled.div`
  height: 150px;
  background-image: url(${props => props.image});
`

export default function BlogPost({ post }) {
  return (
    <div className="col-md-6">
      <Thumbnail image={post.image} />
      <h3>
        {post.title}
      </h3>
    </div>
  )
}
