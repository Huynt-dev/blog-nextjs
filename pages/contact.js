<<<<<<< HEAD
import { Fragment } from 'react';
import Head from 'next/head';

import ContactForm from '../components/contact/contact-form';

function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name='description' content='Send me your messages!' />
      </Head>
      <ContactForm />
    </Fragment>
  );
}

export default ContactPage;
=======
import ContactForm from "../components/contact-form/contact-form"
import Head from "next/head";

function ContactPage() {
  return (
    <>
    <Head>
      <title>Contact</title>
      <meta name="description" content="send me your message" />
    </Head>
    <ContactForm/>
    </>
  )
}

export default ContactPage
>>>>>>> blog-next-js
