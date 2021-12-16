<<<<<<< HEAD
import { Fragment } from 'react';

import MainNavigation from './main-navigation';
=======
import { Fragment } from "react";
import Nav from "./nav";
>>>>>>> blog-next-js

function Layout(props) {
  return (
    <Fragment>
<<<<<<< HEAD
      <MainNavigation />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
=======
      <Nav/>
      <main>{props.children}</main>
    </Fragment>
  )
}

export default Layout;
>>>>>>> blog-next-js
