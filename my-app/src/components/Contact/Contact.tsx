import { useState, useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import contactImg from '../../images/contact-img.svg';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formInitialDetails = {
    fullName: '',
    email: '',
    phoneNumber: '',
    message: '',
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [result, showResult] = useState(false);
  const form = useRef<HTMLFormElement | any>();

  const sendEmail = (e: any) => {
    e.preventDefault();
    console.log(typeof form.current, form.current);
    console.log(typeof e.target, e.target);

    emailjs.sendForm('service_q2d09uk', 'template_tgs7wdn', form.current, 'VWRr5vOngFNkyapiJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    setFormDetails(formInitialDetails);
    showResult(true);
  };

  const onFormUpdate = (toChange: string, value: string) => {
    setFormDetails({
      ...formDetails,
      [toChange]: value,
    });
  };

  return (
    <section className='contact' id="connect">
      <div className="contact-container">
        <div className="contact-form_image">
          <img src={contactImg} alt="contact us" />
        </div>
        <div className="contact-form_block">
          <h2>Get In Touch</h2>
          <form
            ref={form}
            onSubmit={sendEmail}
          >
            <Row className="inputs-block">
              <Col sm={6} className="px-1">
                <input
                  type="text"
                  value={formDetails.fullName}
                  onChange={(e) => onFormUpdate('fullName', e.target.value)}
                  placeholder="Full Name"
                  name="from_name"
                  required
                />
                <input
                  type="tel"
                  value={formDetails.phoneNumber}
                  onChange={(e) => onFormUpdate('phoneNumber', e.target.value)}
                  placeholder="Phone Number"
                  name="phone"
                />
                <input
                  type="email"
                  value={formDetails.email}
                  onChange={(e) => onFormUpdate('email', e.target.value)}
                  placeholder="Email"
                  name="email"
                  required
                />
              </Col>
              <Col sm={6} className="px-1 text_btn_box">
                <textarea
                  rows={6}
                  className="contact_msg-area"
                  value={formDetails.message}
                  onChange={(e) => onFormUpdate('message', e.target.value)}
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
              </Col>
              <Col>
                <p className="status_message">{result ? "Thank you for contacting! I'll reply as soon as possible)" : ''}</p>
              </Col>
            </Row>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
