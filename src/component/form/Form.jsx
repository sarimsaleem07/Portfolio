import React from 'react';
import { useFormik } from 'formik';
import { toast, ToastContainer } from "react-toastify"
import './Form.css';
import { validationSchema } from './yup/Yup';

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      budget: '',
      comment: '',
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const formData = {
          ...values,
          _template: 'table',
          _captcha: 'false',
          _subject: 'New Contact Message',
          _next: 'https://yourwebsite.com/thank-you',
        };

        const response = await fetch('https://formsubmit.co/ajax/sarimsaleem07@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (result.success === 'true') {
          toast.success('Message sent successfully!');
          resetForm();
        } else {
          toast.error('Failed to send message!');
        }
      } catch (error) {
        // console.error('Submission error:', error);
        toast.error('Something went wrong. Please try again.');
      }
    }
  });

  return (
    <div className='form-parent'>
      <div className="about-data">
        <div className="about-heading">
          <h1>Let's 👋 <span className="highlight">Work </span> Together</h1>
        </div>
        <p className='contact-data-para'>
          I'm here to help if you're searching for a product designer to bring your idea to life or a design partner to help take your business to the next level.
        </p>
      </div>

      <div className="form">
        <div className="form-container">
          <form onSubmit={formik.handleSubmit}>
            <div className="row gx-3">

              <div className="col-md-6 mb-4">
                <label className='form-label'>Name</label>
                <input
                  name="name"
                  type="text"
                  className='form-input form-control shadow-none'
                  placeholder="Enter your name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-danger validations">{formik.errors.name}</p>
                )}
              </div>

              <div className="col-md-6 mb-4">
                <label className='form-label'>Email</label>
                <input
                  name="email"
                  type="email"
                  className='form-input form-control shadow-none'
                  placeholder="Enter your email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-danger validations">{formik.errors.email}</p>
                )}
              </div>

              <div className="col-md-6 mb-4">
                <label className='form-label'>Subject</label>
                <input
                  name="subject"
                  type="text"
                  className='form-input form-control shadow-none'
                  placeholder="Enter subject"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.subject}
                />
                {formik.touched.subject && formik.errors.subject && (
                  <p className="text-danger validations">{formik.errors.subject}</p>
                )}
              </div>

              <div className="col-md-6 mb-4">
                <label className='form-label'>Budget</label>
                <input
                  name="budget"
                  type="text"
                  className='form-input form-control shadow-none'
                  placeholder="Enter your budget"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.budget}
                />
                {formik.touched.budget && formik.errors.budget && (
                  <p className="text-danger validations">{formik.errors.budget}</p>
                )}
              </div>

              <div className="col-md-12 mb-4">
                <label className='form-label'>Comment</label>
                <textarea
                  name="comment"
                  rows="5"
                  className='form-input form-control shadow-none'
                  placeholder="Enter your message"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.comment}
                />
                {formik.touched.comment && formik.errors.comment && (
                  <p className="text-danger validations">{formik.errors.comment}</p>
                )}
              </div>

              <div className="col-md-12">
                <button className='contact-submit-btn' type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default Form;
