import { useState } from 'react';
import { useFormik } from 'formik';
import { quoteSchmea } from '../Yup/index.jsx';

export const AutoQuote = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const [toggleSuccessMessage, setToggleSuccessMessage] = useState(false);
  const [serverFormError, setServerFormError] = useState([]);

  const handleForm = (values, actions) => {
    fetch('https://insurance-website-api.onrender.com/api/quote/create', {
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
          setSuccessMessage('Message Sent - 24 Hour Response Time');
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
      effectiveDate: '',
      name: '',
      dateOfBirth: '',
      email: '',
      phone: '',
    },
    validationSchema: quoteSchmea,
    onSubmit: (values, actions) => handleForm(values, actions),
  });

  return (
    <section id="auto-quote-section">
      <div className="driver-details-container">
        <h3>Driver Details:</h3>
        <br />

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
          {errors.effectiveDate && touched.effectiveDate && (
            <p className="error-message">
              <i className="fa-solid fa-circle-exclamation"></i>{' '}
              {errors.effectiveDate}
            </p>
          )}
          <input
            className={
              errors.effectiveDate && touched.effectiveDate ? 'input-error' : ''
            }
            type="text"
            name="effectiveDate"
            id="effectiveDate"
            placeholder="Effective Date: YYYY-MM-DD"
            value={values.effectiveDate}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />

          {errors.name && touched.name && (
            <p className="error-message">
              <i className="fa-solid fa-circle-exclamation"></i> {errors.name}
            </p>
          )}
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

          {errors.dateOfBirth && touched.dateOfBirth && (
            <p className="error-message">
              <i className="fa-solid fa-circle-exclamation"></i>{' '}
              {errors.dateOfBirth}
            </p>
          )}
          <input
            className={
              errors.dateOfBirth && touched.dateOfBirth ? 'input-error' : ''
            }
            type="text"
            name="dateOfBirth"
            id="dateOfBirth"
            placeholder="Date of Birth: YYYY-MM-DD"
            value={values.dateOfBirth}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />

          {errors.email && touched.email && (
            <p className="error-message">
              <i className="fa-solid fa-circle-exclamation"></i> {errors.email}
            </p>
          )}

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

          {errors.phone && touched.phone && (
            <p className="error-message">
              <i className="fa-solid fa-circle-exclamation"></i> {errors.phone}
            </p>
          )}

          <input
            className={errors.phone && touched.phone ? 'input-error' : ''}
            type="phone"
            name="phone"
            id="phone"
            placeholder="Phone..."
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />

          <input
            className="form-btn"
            type="submit"
            value="Send Quote Details"
            disabled={isSubmitting}
          />
        </form>
      </div>
    </section>
  );
};
