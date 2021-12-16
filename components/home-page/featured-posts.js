<<<<<<< HEAD
import PostsGrid from '../posts/posts-grid';
import classes from './featured-posts.module.css';
=======
import PostGrid from '../posts/post-grid'
import classes from './featured-posts.module.css'
>>>>>>> blog-next-js

function FeaturedPosts(props) {
  return (
    <section className={classes.latest}>
<<<<<<< HEAD
      <h2>Featured Posts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
}

export default FeaturedPosts;
=======
      <h2>Feature Posts</h2>
      <PostGrid posts={props.posts}/>
    </section>
  )
}

export default FeaturedPosts
>>>>>>> blog-next-js
