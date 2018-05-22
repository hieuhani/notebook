import React from 'react'
import Link from 'gatsby-link'
import BlogPost from '../components/index/BlogPost'

const posts = [{
  id: 1,
  title: 'Turn your conversations into action',
  date: 'May 22',
  image: 'https://cdn-images-1.medium.com/max/400/1*f9Pht_BG8WM-1QQB8Xi_5g.jpeg',
}, {
  id: 2,
  title: 'Turn your conversations into action',
  date: 'May 22',
  image: 'https://cdn-images-1.medium.com/max/400/1*f9Pht_BG8WM-1QQB8Xi_5g.jpeg',
}, {
  id: 3,
  title: 'Turn your conversations into action',
  date: 'May 22',
  image: 'https://cdn-images-1.medium.com/max/400/1*f9Pht_BG8WM-1QQB8Xi_5g.jpeg',
}, {
  id: 4,
  title: 'Turn your conversations into action',
  date: 'May 22',
  image: 'https://cdn-images-1.medium.com/max/400/1*f9Pht_BG8WM-1QQB8Xi_5g.jpeg',
}, {
  id: 5,
  title: 'Turn your conversations into action',
  date: 'May 22',
  image: 'https://cdn-images-1.medium.com/max/400/1*f9Pht_BG8WM-1QQB8Xi_5g.jpeg',
}]
const IndexPage = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-8">
        <div className="row">
          {posts.map(post => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
      </div>
      <div className="col-md-4">
        Y
      </div>
    </div>
  </div>
)

export default IndexPage
