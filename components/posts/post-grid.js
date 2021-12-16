
import React from 'react';
import PostItem from './post-items';

import classes from './post-grid.module.css';

function PostGrid(props) {
  const {posts} = props
  return (
    <ul className={classes.grid}>
      {posts.map(post => <PostItem key={post.slug} post={post} />)}
    </ul>
  )
}

export default PostGrid
