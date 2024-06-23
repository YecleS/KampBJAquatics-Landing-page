import React from 'react';
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__wrapper'>

        <div className='footer__details-wrapper'>
            <div className='footer__details-header'>
                <h5 className='footer__details-title'>Contacts</h5>
            </div>
            <div className='footer__details-body'>
                <p className='footer__details'><i className="footer__icon fa-solid fa-envelope"></i>Yeclasteven85@gmail.com</p>
                <p className='footer__details'><i className="footer__icon fa-solid fa-phone"></i>0965 760 9399</p>
            </div>
        </div>

        <div className='footer__details-wrapper'>
            <div className='footer__details-header'>
                <h5 className='footer__details-title'>Address</h5>
            </div>
            <div className='footer__details-body'>
                <p className='footer__details'><i className="footer__icon fa-solid fa-location-pin"></i>Block 33 Lot 12 Our Lady Of La Naval Street, Rosario Complex 4023 San Pedro, Philippines</p>
            </div>
        </div>

        <div className='footer__details-wrapper'>
            <div className='footer__details-header'>
                <h5 className='footer__details-title'>Links</h5>
            </div>
            <div className='footer__details-body'>
                <div className='footer__details-system-link-wrapper'>
                    <p className='footer__details'>
                        System Link : <a className='footer__details' href='https://pinnacle.pnc.edu.ph' target='_blank' rel='noopener noreferrer'>https://pinnacle.pnc.edu.ph</a>
                    </p>
                </div>
                <div className='footer__details-socials-wrapper'>
                    <div className='footer__details-socials-label-wrapper'>
                        <p className='footer__details-title'>Socials</p>
                    </div>
                    <div className='footer__details-socials-icons-wrapper'>
                        <a href='https://www.facebook.com/KampBJaquatics' target='_blank' rel='noopener noreferrer'><i className="footer__icon fa-brands fa-facebook-f"></i></a>
                        <a href='https://www.tiktok.com/@kampbjaquatics?lang=en' target='_blank' rel='noopener noreferrer'><i className="footer__icon fa-brands fa-tiktok"></i></a>
                        <a href='https://www.instagram.com/kamp.bj.3/' target='_blank' rel='noopener noreferrer'><i className="footer__icon fa-brands fa-instagram"></i></a>
                    </div>
                </div>
                
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Footer
