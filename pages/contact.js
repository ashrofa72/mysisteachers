import { useState } from "react";
import styles from "../styles/contactus.module.css";
import { Col, Row } from "react-bootstrap";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await response.json();
    setSuccessMessage(data.message);
    setName("");
    setEmail("");
    setMessage("");

    console.log(data);
  };

  return (
    <div className={styles.container}>
      <Row>
        <Col>
          <div className={styles.image}>
            <img src="Images/cartoon.png" alt="pic" />
            <span>Send Me Message</span>
          </div>
        </Col>
        <Col>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div>
              <label htmlFor="name" className={styles.label}>
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className={styles.input}
              />
            </div>
            <div>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className={styles.input}
              />
            </div>
            <div>
              <label htmlFor="message" className={styles.label}>
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className={styles.input}
              />
            </div>
            <button type="submit" className={styles.button}>
              Send
            </button>
            <div className={styles.successmessage}>
              {successMessage && (
                <div className="success-message">{successMessage}</div>
              )}
            </div>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default ContactUs;
