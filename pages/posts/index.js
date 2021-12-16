import Head from "next/head";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../utils/posts-util";

function AllPostsPage(props) {
  return (
    <>
      <Head>
        <title>All posts</title>
        <meta name="description" content="A list all posts" />
      </Head>
      <AllPosts posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
