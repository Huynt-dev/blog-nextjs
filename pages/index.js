import { Fragment } from 'react';
<<<<<<< HEAD
import Head from 'next/head';

import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';
import { getFeaturedPosts } from '../lib/posts-util';

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Max' Blog</title>
        <meta
          name='description'
          content='I post about programming and web development.'
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
=======
import Head from "next/head";
import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';
import { getFeaturedPosts } from '../utils/posts-util';

function HomePage(props) {

  return (
    <Fragment>
      <Head>
        <title>Huynt Blog</title>
        <meta name="description" content="Learning nextjs" />
      </Head>
      <Hero/>
      <FeaturedPosts posts={props.posts}/>
    </Fragment>
  )
}

export function getStaticProps(){
  const featuredPosts = getFeaturedPosts()

  return {
    props: {
      posts: featuredPosts
    },
    // revalidate: 60
  }
}

export default HomePage;
>>>>>>> blog-next-js
