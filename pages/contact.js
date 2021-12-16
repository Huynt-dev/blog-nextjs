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
