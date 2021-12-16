import Image from 'next/image';

import classes from './post-header.module.css';

function PostHeader(props) {
<<<<<<< HEAD
  const { title, image } = props;
=======
  const {title, image} = props;
>>>>>>> blog-next-js

  return (
    <header className={classes.header}>
      <h1>{title}</h1>
<<<<<<< HEAD
      <Image src={image} alt={title} width={200} height={150} />
    </header>
  );
}

export default PostHeader;
=======
      <Image src={image} alt={title} width={200} height={150}/>
    </header>
  )
}

export default PostHeader
>>>>>>> blog-next-js
