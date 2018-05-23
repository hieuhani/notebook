import React from 'react'
import styled from 'styled-components'

const Thumbnail = styled.img`
  width: 100%;
`

const Summary = styled.p`
  margin-top: 10px;
  color: #555;
`

const Separator = styled.hr`
  border-color: rgba(0,0,0,.0785);
  border-width: 0.5px;
`

const Wrapper = styled.div`
padding: 1rem 0;
color: #444;
`

const PostFooter = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 1.5rem;
.read-more-link {
  color: #555;
}
`

const PostInfo = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
`
const Avatar = styled.img`
width: 40px;
`

const Author = styled.div`
h3, blockquote {
  margin: 0;
}
padding-left: .6rem;
h3 {
  font-size: 0.9rem;
  font-weight: 500;
  color: #555;
}
blockquote {
  font-size: 0.8rem;
  color: #888;
}
`

export default function BlogPost({ post }) {
  return (
    <Wrapper className="row">
      <div className="col">
        <h2>
          {post.title}
        </h2>
        <Thumbnail src={post.image} />
        <Summary>{post.summary}</Summary>
        <PostFooter>
          <PostInfo>
            <Avatar src="https://avatars2.githubusercontent.com/u/4966345?s=460&v=4" />
            <Author>
              <h3>Hieu Tran</h3>
              <blockquote>23-05-2012</blockquote>
            </Author>
          </PostInfo>
          <a href="#" className="read-more-link">Read more</a>
        </PostFooter>
        <Separator />
      </div>
    </Wrapper>
  )
}
