<<<<<<< HEAD
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
=======
import React from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import PostHeader from "./post-header";
>>>>>>> blog-next-js
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
<<<<<<< HEAD

import PostHeader from './post-header';
import classes from './post-content.module.css';
=======
// import remarkGfm from 'remark-gfm'

import classes from "./post-content.module.css";
>>>>>>> blog-next-js

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);

function PostContent(props) {
<<<<<<< HEAD
  const { post } = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    // image(image) {
    //   return (
    //     <Image
    //       src={`/images/posts/${post.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },
    paragraph(paragraph) {
      const { node } = paragraph;

      if (node.children[0].type === 'image') {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.url}`}
              alt={image.alt}
=======
  const { slug, image, title, content } = props.post;

  const imagePath = `/images/posts/${slug}/${image}`;

  const customRenderers = {
    p(paragraph) {
      const { node } = paragraph;
      if (node.children[0].tagName === "img") {
        const imageRender = node.children[0];
        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${slug}/${imageRender.properties.src}`}
              alt={imageRender.alt}
>>>>>>> blog-next-js
              width={600}
              height={300}
            />
          </div>
        );
      }
<<<<<<< HEAD

      return <p>{paragraph.children}</p>;
    },

    code(code) {
      const { language, value } = code;
=======
      return <p>{paragraph.children}</p>;
    },

    // code(code) {
    //   const { language, value } = code;
    //   return (
    //     <SyntaxHighlighter
    //       style={atomDark}
    //       language={language}
    //       children={value}
    //     />
    //   );
    // },

    code(code) {
      const { className, children } = code;
      const language = className.split('-')[1]; // className is something like language-js => We need the "js" part here
>>>>>>> blog-next-js
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
<<<<<<< HEAD
          children={value}
=======
          children={children}
>>>>>>> blog-next-js
        />
      );
    },
  };

  return (
    <article className={classes.content}>
<<<<<<< HEAD
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown renderers={customRenderers}>{post.content}</ReactMarkdown>
=======
      <PostHeader title={title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>,
>>>>>>> blog-next-js
    </article>
  );
}

export default PostContent;
