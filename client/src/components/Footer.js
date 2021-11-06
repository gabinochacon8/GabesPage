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
        {thankYouNote ?
        <span>Thanks!</span> :
        <form className="contact_form">
          <h5>Contact Me</h5>
          <div className="inputs">
            <span>Name</span>
            <input type="text" className="name_email"/>
          </div>
          <div className="inputs">
            <span>Email</span>
            <input type="email" className="name_email"/>
          </div>
          <div className="inputs">
            <span>Message</span>
            <textarea rows="5" cols="30" id="TITLE"/>
          </div>
          <button onClick={(e) => thankYouNote}>Send</button>
        </form>
        }
      </div>
      <h6 className="footer">
        Copyright&copy; 2021 WEBSITE DESIGNED BY GABE CHACON. All rights
        reserved.
      </h6>
    </div>
  );
}

export default Footer;
