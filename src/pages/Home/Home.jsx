import './Home.css';

const Home = () => {
  return (
    <form className='form-container'>
      <label htmlFor='name'>Name:</label>
      <input className='input' type='text' name='name' id='name' />

      <label htmlFor='email'>Email:</label>
      <input className='input' type='email' name='email' id='email' />

      <button type='submit' className='btn'>
        Submit
      </button>
    </form>
  );
};
export default Home;
