import { useRef, useState } from 'react';
import { useAppContext } from '../context/AppProvider';
import { axiosClientLogin } from '../axiosClient.js';

export const Login = () => {
  const [errors, setErrors] = useState(null);

  const { setUser, setToken } = useAppContext();

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleForm = (e) => {
    e.preventDefault();

    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    setErrors(null);

    axiosClientLogin
      .post('/login', payload)
      .then(({ data }) => {
        setToken(data.token);
        setUser(data.user);
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          if (response.data.errors) {
            setErrors(response.data.errors);
          } else {
            setErrors({
              email: [response.data.message],
            });
          }
        }
      });
  };

  return (
    <section id='login'>
      <form onSubmit={handleForm}>
        <h1 className="title">Login</h1>

        {errors && (
          <div className="alert">
            {Object.keys(errors).map((key) => (
              <>
                <p key={key}>{errors[key][0]}</p>
              </>
            ))}
          </div>
        )}

        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button className="login-btn">Login</button>
      </form>
    </section>
  );
};