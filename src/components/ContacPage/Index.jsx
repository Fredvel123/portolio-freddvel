import React, { Fragment } from 'react';
// styled components.
import { ContactSection, Icons } from '../../styledComponents/ContactStylerd';
// icons
import facebookIcon from '../../icons/facebook.png'
import gitHubIcon from '../../icons/github.png'
import linkdinIcon from '../../icons/linkedin.png'


function ContactPage() {
  return (
    <Fragment>
      <ContactSection id="contact_section" >
        <h2>You can contact me through my social media networks!</h2>
        <Icons>
          <a href="https://www.facebook.com/freddy.velarde.969/" target="_blank"><img src={facebookIcon} alt="" /></a>
          <a href="https://www.linkedin.com/in/freddy-velarde-790049202/" target="_blank"><img src={linkdinIcon} alt="" /></a>
          <a href="https://github.com/Fredvel123" target="_blank"><img src={gitHubIcon} alt="" /></a>
        </Icons>
      </ContactSection>
    </Fragment>
  )
}

export default ContactPage;
