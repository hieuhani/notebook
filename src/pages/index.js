import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import BlogPost from '../components/index/BlogPost'

const Main = styled.div`
padding-right: 5rem !important;
`

const posts = [{
  id: 1,
  title: 'Turn your conversations into action',
  date: 'May 22',
  image: 'https://cdn-images-1.medium.com/fit/t/800/240/1*IZcJKz3761vChU1VFHfzkw.jpeg',
  summary: 'In this tutorial, we’re going to cover how to connect to a spreadsheet hosted on Google, display that information inside a React application, and deploy it to Netlify.'
}, {
  id: 2,
  title: 'Turn your conversations into action',
  date: 'May 22',
  image: 'https://cdn-images-1.medium.com/fit/t/800/240/1*IZcJKz3761vChU1VFHfzkw.jpeg',
  summary: 'In this tutorial, we’re going to cover how to connect to a spreadsheet hosted on Google, display that information inside a React application, and deploy it to Netlify.'
}, {
  id: 3,
  title: 'Turn your conversations into action',
  date: 'May 22',
  image: 'https://cdn-images-1.medium.com/fit/t/800/240/1*IZcJKz3761vChU1VFHfzkw.jpeg',
  summary: 'In this tutorial, we’re going to cover how to connect to a spreadsheet hosted on Google, display that information inside a React application, and deploy it to Netlify.'
}, {
  id: 4,
  title: 'Turn your conversations into action',
  date: 'May 22',
  image: 'https://cdn-images-1.medium.com/fit/t/800/240/1*IZcJKz3761vChU1VFHfzkw.jpeg',
  summary: 'In this tutorial, we’re going to cover how to connect to a spreadsheet hosted on Google, display that information inside a React application, and deploy it to Netlify.'
}, {
  id: 5,
  title: 'Turn your conversations into action',
  date: 'May 22',
  image: 'https://cdn-images-1.medium.com/fit/t/800/240/1*IZcJKz3761vChU1VFHfzkw.jpeg',
  summary: 'In this tutorial, we’re going to cover how to connect to a spreadsheet hosted on Google, display that information inside a React application, and deploy it to Netlify.'
}]
const IndexPage = () => (
  <div className="container">
    <div className="row">
      <Main className="col-md-8">
        {posts.map(post => (
          <BlogPost key={post.id} post={post} />
        ))}
      </Main>
    </div>
  </div>
)

export default IndexPage
