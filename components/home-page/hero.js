import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/test.png"
          alt="image hehe"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm David</h1>
      <p>this is project learn NextJs</p>
    </section>
  );
}

export default Hero;
