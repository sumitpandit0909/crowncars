import React, { useState } from "react";
import {brand} from "../../lib/config.json"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    phone: '',
    msg: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch('https://chester-backend.onrender.com/api/v1/crownCars', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      // Reset form on success
      setFormData({
        fname: '',
        lname: '',
        phone: '',
        msg: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <React.Fragment>
      <div className="col-lg-6">
        {/* Contact Form Start */}
        <div className="whatsapp-btn" > <a href={brand.whatsappgroup} className="wa-text" target="_blank"><i class="fa-brands fa-whatsapp"></i> Join Our Official WhatsApp Group</a></div>
      
        <p style={{textAlign:"center"}}>or</p>
     
        <div className="contact-us-form">
          <form
            id="contactForm"
            onSubmit={handleSubmit}
            data-toggle="validator"
            className="wow fadeInUp"
            data-wow-delay="0.5s"
          >
            <div className="row">
              <div className="form-group col-md-6 mb-4">
                <label>first name</label>
                <input
                  type="text"
                  name="fname"
                  className="form-control"
                  id="fname"
                  placeholder="Enter Your Name"
                  value={formData.fname}
                  onChange={handleChange}
                  required
                />
                <div className="help-block with-errors"></div>
              </div>

              <div className="form-group col-md-6 mb-4">
                <label>last name</label>
                <input
                  type="text"
                  name="lname"
                  className="form-control"
                  id="lname"
                  placeholder="Enter Your Name"
                  value={formData.lname}
                  onChange={handleChange}
                  required
                />
                <div className="help-block with-errors"></div>
              </div>


              <div className="form-group col-md mb-4">
                <label>phone</label>
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  id="phone"
                  placeholder="Enter Your Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <div className="help-block with-errors"></div>
              </div>

              <div className="form-group col-md-12 mb-4">
                <label>message</label>
                <textarea
                  name="msg"
                  className="form-control"
                  id="msg"
                  rows="4"
                  placeholder="Write Your Message"
                  value={formData.msg}
                  onChange={handleChange}
                  required
                ></textarea>
                <div className="help-block with-errors"></div>
              </div>

              <div className="col-lg-12">
                <div className="contact-form-btn">
                  <button 
                    type="submit" 
                    className="btn-default"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Sending...' : 'send message'}
                  </button>
                  <div id="msgSubmit" className="h3 hidden"></div>
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* Contact Form End */}
      </div>
    </React.Fragment>
  );
};

export default ContactForm;
