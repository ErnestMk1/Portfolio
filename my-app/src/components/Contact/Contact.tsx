import React, { useState, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import contactImg from '../../images/contact-img.svg';
import './Contact.css';

const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  };
  const initialStatus = { msg: '', success: false };
  const statusText = useRef<HTMLParagraphElement>(null);

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState(initialStatus);

  const onFormUpdate = (toChange: string, value: string) => {
    setFormDetails({
      ...formDetails,
      [toChange]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setButtonText('Sending...');
    console.log(statusText.current?.classList);

    await fetch('http://localhost:3000/contact', {
      method: "POST",
      headers: {
        "Content-Type": "Application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    }).then(() => {
      if (formDetails.message !== '' &&
          formDetails.firstName !== '' &&
          formDetails.lastName !== '' &&
          formDetails.email !== '') {

        setStatus({ success: true, msg: "Your message has been sent. Thx for contacting!)" });
      } else {
        setStatus({success: false, msg: "Please fill in the form" })
      }
    }).catch(() => {
      setStatus({ success: false, msg: "Something went wrong..." })
    });

    statusText.current?.classList.add("appear");
    setButtonText("Send");
    setFormDetails(formInitialDetails);
  };

  return (
    <section className='contact' id="connect">
      <Container className="contact-container">
        <Row className="align-items-center el_position">
          <Col md={6}>
            <img src={contactImg} alt="contact us" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    onChange={(e) => onFormUpdate('firstName', e.target.value)}
                    placeholder="First Name"
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    onChange={(e) => onFormUpdate('lastName', e.target.value)}
                    placeholder="Last Name"
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phoneNumber}
                    onChange={(e) => onFormUpdate('phoneNumber', e.target.value)}
                    placeholder="Phone Number"
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    onChange={(e) => onFormUpdate('email', e.target.value)}
                    placeholder="Email"
                  />
                </Col>
                <Col sm={6} className="px-1 text_btn_box">
                  <textarea
                    rows={6}
                    className="contact_msg-area"
                    value={formDetails.message}
                    onChange={(e) => onFormUpdate('message', e.target.value)}
                    placeholder="Message"
                  ></textarea>
                  <button onClick={handleSubmit}>{buttonText}</button>
                </Col>
                <Col>
                  <p className="status_message" ref={statusText}>{status.msg}</p>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
