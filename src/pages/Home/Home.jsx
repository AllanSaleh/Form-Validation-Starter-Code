import './Home.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Home = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    over18: Yup.boolean().oneOf([true], 'You must be over 18'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      over18: false,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form className='form-container' onSubmit={formik.handleSubmit}>
      <h1>With Formik & Yup</h1>
      <label htmlFor='name'>Name:</label>
      <input
        className='input'
        type='text'
        name='name'
        id='name'
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.name && formik.errors.name && (
        <div className='error'>{formik.errors.name}</div>
      )}

      <label htmlFor='email'>Email:</label>
      <input
        className='input'
        type='email'
        name='email'
        id='email'
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.email && formik.errors.email && (
        <div className='error'>{formik.errors.email}</div>
      )}

      <label>
        <input
          className='input'
          type='checkbox'
          name='over18'
          checked={formik.values.over18}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        Are you over 18?
      </label>
      {formik.touched.over18 && formik.errors.over18 && (
        <div className='error'>{formik.errors.over18}</div>
      )}

      <button type='submit' className='btn'>
        Submit
      </button>
    </form>
  );
};
export default Home;
