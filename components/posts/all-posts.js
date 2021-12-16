<<<<<<< HEAD
import classes from './all-posts.module.css';
import PostsGrid from './posts-grid';
=======
import React from 'react'
import PostGrid from './post-grid'

import classes from './all-posts.module.css'
>>>>>>> blog-next-js

function AllPosts(props) {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
<<<<<<< HEAD
      <PostsGrid posts={props.posts} />
    </section>
  );
}

export default AllPosts;
=======
      <PostGrid posts={props.posts} />
    </section>
  )
}

export default AllPosts
>>>>>>> blog-next-js
