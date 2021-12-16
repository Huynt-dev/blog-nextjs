import { Fragment } from 'react';
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
