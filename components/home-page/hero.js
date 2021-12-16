<<<<<<< HEAD
import Image from 'next/image';

import classes from './hero.module.css';
=======
import Image from "next/image";

import classes from "./hero.module.css";
>>>>>>> blog-next-js

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
<<<<<<< HEAD
          src='/images/site/max.png'
          alt='An image showing Max'
=======
          src="/images/site/test.png"
          alt="image hehe"
>>>>>>> blog-next-js
          width={300}
          height={300}
        />
      </div>
<<<<<<< HEAD
      <h1>Hi, I'm Max</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        Angular or React.
      </p>
=======
      <h1>Hi, I'm David</h1>
      <p>this is project learn NextJs</p>
>>>>>>> blog-next-js
    </section>
  );
}

export default Hero;
