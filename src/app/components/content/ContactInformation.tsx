import React from 'react'
import styles from '../../styles/contact-information.module.css'

const ContactInformation = () => {
  return (
    <ul className={styles['contact-information']}>
      <li>
        <a href="mailto:danjer0826@gmail.com">Email</a>
      </li>
      <li>
        <a href="tel:+1 829-672-5361">Phone</a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/danyer-dominguez/?locale=en_US">Linkedin</a>
      </li>
    </ul>
  )
}

export default ContactInformation
