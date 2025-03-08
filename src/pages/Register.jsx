import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import useRegister from '../hooks/auth/useRegister.js';
import { useState } from 'react';

function Register() {
  const { register, loading, error } = useRegister();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  async function handleRegister(e) {
    e.preventDefault();

    await register(email, password, passwordCheck, firstName, lastName);
  }

  return (
    <>
      <Helmet>
        <title>MealMind | Sign Up</title>
        <meta name="description"
              content="Sign up for MealMind and start sharing your favorite recipes, discover new ones, and join a growing community of food lovers." />
        <meta property="og:title" content="MealMind | Sign Up" />
        <meta property="og:description"
              content="Sign up for MealMind and start sharing your favorite recipes, discover new ones, and join a growing community of food lovers." />
        <meta property="og:url" content="https://mealmind.pages.dev/register" />
        <link rel="canonical" href="https://mealmind.pages.dev/register" />
      </Helmet>

      <main className={'min-h-screen bg-stone-100 text-stone-800 flex items-center justify-center'}>
        <section className={'w-full p-4 container max-w-xl space-y-6 sm:mx-auto sm:px-6'}>
          <div>
            <Link to={'/'} className={'px-4 py-2 text-red-600 rounded-lg transition-all hover:text-red-800 hover:underline'}>
              <i className={'uil uil-arrow-left'}></i> Back to home</Link>
          </div>

          <div className={'w-full space-y-6 sm:bg-white sm:px-6 sm:py-4 sm:rounded-2xl sm:shadow-lg'}>
            <h1 className={'logo-font text-4xl text-red-600 font-bold'}>Create account</h1>

            {error &&
              <div className={'px-4 py-2 rounded-md bg-red-100 text-red-800'}>
                <p>{error}</p>
              </div>
            }

            <form onSubmit={handleRegister} className={'space-y-6'}>
              <div className={'flex flex-col justify-center space-y-6 sm:flex-row sm:space-x-4 sm:space-y-0'}>
                <div className={'w-full'}>
                  <label htmlFor={'first-name'} className={'w-full'}>First name</label>
                  <input id={'first-name'} type={'text'} placeholder={'John'} required onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                         className={'w-full px-3 py-2 bg-stone-200 text-stone-600 border-2 border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300'} />
                </div>

                <div className={'w-full'}>
                  <label htmlFor={'last-name'} className={'w-full'}>Last name</label>
                  <input id={'last-name'} type={'text'} placeholder={'Doe'} required onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                         className={'w-full px-3 py-2 bg-stone-200 text-stone-600 border-2 border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300'} />
                </div>
              </div>

              <div>
                <label htmlFor={'email'} className={'w-full'}>E-mail</label>
                <input id={'email'} type={'email'} placeholder={'johndoe@example.com'} required onChange={(e) => {
                  setEmail(e.target.value);
                }}
                       className={'w-full px-3 py-2 bg-stone-200 text-stone-600 border-2 border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300'} />
              </div>

              <div>
                <label htmlFor={'password'} className={'w-full'}>Password</label>
                <input id={'password'} type={'password'} placeholder={'********'} required onChange={(e) => {
                  setPassword(e.target.value);
                }}
                       className={'w-full px-3 py-2 bg-stone-200 text-stone-600 border-2 border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300'} />

                <ul className={'bg-white p-2 rounded-md mt-2 text-stone-400 flex flex-col text-sm sm:bg-stone-100'}>
                  <li>Minimum 8 characters</li>
                  <li>At least one number</li>
                  <li>At least one uppercase letter</li>
                  <li>At least one special character</li>
                </ul>
              </div>

              <div>
                <label htmlFor={'password-check'} className={'w-full'}>Password confirmation</label>
                <input id={'password-check'} type={'password'} placeholder={'********'} required onChange={(e) => {
                  setPasswordCheck(e.target.value);
                }}
                       className={'w-full px-3 py-2 bg-stone-200 text-stone-600 border-2 border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300'} />
              </div>

              <div className={'mt-4'}>
                <button type={'submit'} disabled={loading}
                        className={'w-full transition-all cursor-pointer rounded-md bg-red-600 px-3.5 py-2.5 text-lg text-stone-100 shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'}>
                  {loading ? 'Loading...' : 'Create account'}
                </button>
              </div>
            </form>

            <p className={'text-center text-stone-400'}>Already have an account? {' '}
              <Link to={'/login'} className={'text-red-600 underline hover:text-red-800'}>Sign in here</Link></p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Register;
