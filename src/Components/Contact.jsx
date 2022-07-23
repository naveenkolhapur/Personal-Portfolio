import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'

const Contact = () => {

    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_3905wjm', 'template_z93j9mh', form.current, 'tUVAMpuK5Y3Yt7KLf')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          alert("Thank you, Your form has been Submitted successfully!");
      };


    
    return(
        <>
        <section className="contact-section" id='contact'>
            <div className="container">
            <h1 className="contact-heading">Contact Me</h1>
            <hr className="underline"/>
                <div className="row">
                    <div className="col-12 col-lg-6 col-md-6 col-xl-6 left-col"> 
                                        
                        <div className="contact-info mt-5">
                        <h3 className="mb-3">Get in Touch</h3>  
                            <p><a href = "mailto: naveenkolhapur18@gmail.com"><i class="fa fa-envelope" aria-hidden="true"></i> naveenkolhapur18@gmail.com</a></p>
                            <p><a href="tel:968-695-2991"><i class="fa fa-phone" aria-hidden="true"></i> +91-9686952991</a></p>
                            <p> <i class="fa fa-map-marker" aria-hidden="true"></i>  Bangalore</p>
                            <div>
                                <ul className="icons-list">
                                    <a href='https://www.linkedin.com/in/naveenkolhapur18/' target='_blank'><li><i class="fa fa-linkedin" aria-hidden="true" title="Linkedin"></i></li></a>
                                    <a href='https://www.facebook.com/naveen.kolhapur.1/' target='_blank'><li><i class="fa fa-facebook-square" aria-hidden="true" title="Facebook"></i></li></a>
                                    <a href='https://www.instagram.com/naveen_kolhapur/' target='_blank'><li><i class="fa fa-instagram" aria-hidden="true" title="Instagram"></i></li></a>
                                    <a href='https://github.com/naveenkolhapur' target='_blank'><li><i class="fa fa-github" aria-hidden="true" title="Github"></i></li></a>                                   
                                    <a href='https://twitter.com/KolhapurNaveen?s=08' target='_blank'><li><i class="fa fa-twitter" aria-hidden="true" title="Twitter"></i></li></a>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-md-6 col-xl-6 right-col">
                        <div className="form-div">
                            <form ref={form} onSubmit={sendEmail}>
                                <label>Name</label>
                                <input type="text" placeholder="Your Name" name="user_name" autoComplete='off' required/>
                                <label>Email</label>
                                <input type="Email" placeholder="Your Email" name="user_email" autoComplete='off' required/>
                                <label>Your Message</label>
                                <textarea rows="4" cols="50" placeholder="Your Message" name="user_message" autoComplete='off' required></textarea>
                                <br/>
                                <input className="submit-btn" type="submit" value="Submit"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Contact