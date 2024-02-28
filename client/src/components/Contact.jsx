import { useState } from 'react';
import { useFormik } from 'formik';
import { formSchema } from '../Yup/index.jsx'

export const Contact = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const [toggleSuccessMessage, setToggleSuccessMessage] = useState(false);
  const [serverFormError, setServerFormError] = useState([]);

  const handleForm = (values, actions) => {
    fetch('http://localhost:8000/api/contact/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.errors && data.errors.length > 0) {
          setServerFormError(data.errors);
        } else {
          setSuccessMessage('Message Sent Successfully');
          setToggleSuccessMessage(true);

          setTimeout(() => {
            setToggleSuccessMessage(false);
          }, 5000);
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        actions.resetForm();
      });
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: formSchema,
    onSubmit: (values, actions) => handleForm(values, actions),
  });

  return (
    <section id="contact">
      <h3>Let&apos;s Talk</h3>
      <p>Send me a message!</p>

      {serverFormError.map((errors, index) => {
        return (
          <p key={index} className="error-message server-form-errors">
            {errors.msg}
          </p>
        );
      })}
      {toggleSuccessMessage && (
        <p className="success-message">{successMessage}</p>
      )}

      <form onSubmit={handleSubmit}>
      {errors.name && touched.name && <p className='error-message'><i className="fa-solid fa-circle-exclamation"></i> {errors.name}</p>}
        <input 
          className={errors.name && touched.name ? 'input-error' : ''}
          type="text" 
          name="name" 
          id="name" 
          placeholder="Full Name..." 
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />

        {errors.email && touched.email && <p className='error-message'><i className="fa-solid fa-circle-exclamation"></i> {errors.email}</p>}
        <input 
          className={errors.email && touched.email ? 'input-error' : ''}
          type="email" 
          name="email" 
          id="email" 
          placeholder="Email..." 
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        

        {errors.message && touched.message && <p className='error-message'><i className="fa-solid fa-circle-exclamation"></i> {errors.message}</p>}
        <textarea
          className={errors.message && touched.message ? 'input-error' : ''}
          type="text"
          name="message"
          id="message"
          placeholder="Message..."
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        ></textarea>

        <input 
          className="form-btn" 
          type="submit" 
          value="Send Message" 
          disabled={isSubmitting}
        />
      </form>
    </section>
  );
};
