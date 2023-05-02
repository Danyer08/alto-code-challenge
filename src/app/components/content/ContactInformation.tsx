import React from 'react'
import styles from '../../styles/contact-information.module.css'

const ContactInformation = () => {
  const contactInfo = [
    {
      name: 'Email',
      link: 'mailto:danjer0826@gmail.com',
    },
    {
      name: 'Phone',
      link: 'tel:+1 829-672-5361',
    },
    {
      name: 'Linkedin',
      link: 'https://www.linkedin.com/in/danyer-dominguez/?locale=en_US',
    },
  ]

  const displayContactInformation = () => {
    return contactInfo.map((info) => (
      <li key={info.name}>
        <a href={info.link}>{info.name}</a>
      </li>
    ))
  }

  return <ul className={styles['contact-information']}>{displayContactInformation()}</ul>
}

export default ContactInformation
