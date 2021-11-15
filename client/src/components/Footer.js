import React from "react";

function Footer(props) {

  const thankYouNote = (e) => {
    if (e) {
      return true;
    }
    return false;
  }

  return (
    <div>
      <div className="contact_container">
        <form
        className="contact_form"
        action="https://formsubmit.co/325569d734ebe0786a1b5168ec388e6f"
        method="POST"
        name="EmailForm"
        enctype="multipart/form-data"
        >
          <h5>Contact Me</h5>
          <div className="inputs">
            <span>Name</span>
            <input type="text" name="name" className="name_email"/>
          </div>
          <div className="inputs">
            <span>Email</span>
            <input type="email" name="email" className="name_email"/>
          </div>
          <div className="inputs">
            <span>Message</span>
            <textarea rows="6" cols="32" id="TITLE" name="message"/>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
      <h6 className="footer">
        Copyright&copy; 2021 WEBSITE DESIGNED BY GABE CHACON. All rights
        reserved.
      </h6>
    </div>
  );
}

export default Footer;
