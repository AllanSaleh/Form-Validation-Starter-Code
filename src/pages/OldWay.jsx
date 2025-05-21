import { useState } from 'react';

const OldWay = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formValues.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formValues.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formValues.password) {
      newErrors.password = 'Password is required';
    } else if (formValues.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log(formValues);
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  };

  const handleReset = () => {
    setFormValues({
      name: '',
      email: '',
      password: '',
    });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <h1>Without Formik & Yup</h1>
      <label htmlFor='name'>Name:</label>
      <input
        className='input'
        type='text'
        id='name'
        name='name'
        value={formValues.name}
        onChange={handleChange}
      />
      {errors.name && <div className='error'>{errors.name}</div>}

      <label htmlFor='email'>Email:</label>
      <input
        className='input'
        type='email'
        id='email'
        name='email'
        value={formValues.email}
        onChange={handleChange}
      />
      {errors.email && <div className='error'>{errors.email}</div>}

      <label htmlFor='password'>Password:</label>
      <input
        className='input'
        type='password'
        id='password'
        name='password'
        value={formValues.password}
        onChange={handleChange}
      />
      {errors.password && <div className='error'>{errors.password}</div>}

      <button type='submit' className='btn'>
        Submit
      </button>
      <button type='button' onClick={handleReset} className='btn btn-secondary'>
        Reset
      </button>

      {submitted && (
        <div className='success'>Thanks! Your form was submitted.</div>
      )}
    </form>
  );
};

export default OldWay;
