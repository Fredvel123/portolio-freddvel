import React, { Fragment } from 'react';
// styled components.
import { ContactSection, Icons } from '../../styledComponents/ContactStylerd';
// icons
import facebookIcon from '../../icons/facePink.png'
import gitHubIcon from '../../icons/githubPink.png'
import linkdinIcon from '../../icons/linkPink.png'
import { useSelector } from 'react-redux';
// icons font awesome



function ContactPage() {
  const languajes = useSelector(state => state.languajes.value)
  return (
    <Fragment>
      <ContactSection id="contact_section" >
        {languajes ? 
          <h2>You can contact me through my social media networks!</h2>
            :
          <h2>Puedes contactarme mediante mis redes sociales</h2>
        }
        <Icons>
          <a href="https://www.facebook.com/freddy.velarde.969/" target="_blank" rel="noreferrer" ><img src={facebookIcon} alt="" /></a>
          <a href="https://www.linkedin.com/in/freddyvelarde/" target="_blank" rel="noreferrer" ><img src={linkdinIcon} alt="" /></a>
          <a href="https://github.com/Fredvel123" target="_blank" rel="noreferrer" ><img src={gitHubIcon} alt="" /></a>
        </Icons>
      </ContactSection>
    </Fragment>
  )
}

export default ContactPage;
