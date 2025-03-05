import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import useLogin from '../hooks/useLogin.js';
import { useState } from 'react';

function Home() {
  const { login, loading, error } = useLogin();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin(e) {
    e.preventDefault();

    await login(email, password);
  }

  return (
    <>
      <Helmet>
        <title>MealMind | Sign In</title>
        <meta name="description"
              content="Log in to MealMind to access your recipes, share new ones, and join our cooking community." />
        <meta property="og:title" content="MealMind | Sign In" />
        <meta property="og:description"
              content="Log in to MealMind to access your recipes, share new ones, and join our cooking community." />
        <meta property="og:url" content="https://mealmind.pages.dev/login" />
        <link rel="canonical" href="https://mealmind.pages.dev/login" />
      </Helmet>

      <section className={'min-h-screen bg-stone-100 text-stone-800 flex items-center justify-center'}>
        <div className={'w-full p-4 container max-w-xl space-y-6 sm:mx-auto sm:px-6'}>
          <div>
            <Link to={'/'} className={'px-4 py-2 text-red-600 rounded-lg transition-all hover:text-red-700'}>
              <i className={'uil uil-arrow-left'}></i> Back to home</Link>
          </div>

          <div className={'w-full space-y-6 sm:bg-white sm:px-6 sm:py-4 sm:rounded-2xl sm:shadow-lg'}>
            <h1 className={'logo-font text-4xl text-red-500 font-bold'}>Welcome back</h1>

            {error &&
              <div className={'px-4 py-2 rounded-md bg-red-100 text-red-800'}>
                <p>{error}</p>
              </div>
            }

            <form onSubmit={handleLogin} className={'space-y-6'}>
              <div>
                <label htmlFor={'email'} className={'w-full'}>E-mail</label>
                <input id={'email'} type={'email'} placeholder={'johndoe@example.com'} required
                       onChange={e => setEmail(e.target.value)}
                       className={'w-full px-3 py-2 bg-stone-300 text-stone-700 border-2 border-stone-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300'} />
              </div>

              <div>
                <label htmlFor={'password'} className={'w-full'}>Password</label>
                <input id={'password'} type={'password'} placeholder={'********'} required
                       onChange={e => setPassword(e.target.value)}
                       className={'w-full px-3 py-2 bg-stone-300 text-stone-700 border-2 border-stone-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300'} />
              </div>

              <div className={'mt-4'}>
                <button type={'submit'} disabled={loading}
                        className={'w-full text-lg px-4 py-1 border-2 cursor-pointer border-red-600 bg-red-600 text-stone-100 rounded-lg transition-all hover:bg-red-500'}>
                  {loading ? 'Loading...' : 'Login'}
                </button>
              </div>
            </form>

            <p className={'text-center text-stone-400'}>Doesn't have an account? {' '}
              <Link to={'/register'} className={'text-red-500 underline hover:text-red-700'}>Sign up here</Link></p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
