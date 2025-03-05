import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import useLogin from '../hooks/useLogin.js';
import { useState } from 'react';

function Login() {
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

      <main className={'min-h-screen bg-stone-100 text-stone-800 flex items-center justify-center'}>
        <section className={'w-full p-4 container max-w-xl space-y-6 sm:mx-auto sm:px-6'}>
          <div>
            <Link to={'/'} className={'px-4 py-2 text-red-600 rounded-lg transition-all hover:text-red-800 hover:underline'}>
              <i className={'uil uil-arrow-left'}></i> Back to home</Link>
          </div>

          <div className={'w-full space-y-6 sm:bg-white sm:px-6 sm:py-4 sm:rounded-2xl sm:shadow-lg'}>
            <h1 className={'logo-font text-4xl text-red-600 font-bold'}>Welcome back</h1>

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
                       className={'w-full px-3 py-2 bg-stone-200 text-stone-600 border-2 border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300'} />
              </div>

              <div>
                <label htmlFor={'password'} className={'w-full'}>Password</label>
                <input id={'password'} type={'password'} placeholder={'********'} required
                       onChange={e => setPassword(e.target.value)}
                       className={'w-full px-3 py-2 bg-stone-200 text-stone-600 border-2 border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300'} />
              </div>

              <div className={'mt-4'}>
                <button type={'submit'} disabled={loading}
                        className={'w-full transition-all cursor-pointer rounded-md bg-red-600 px-3.5 py-2.5 text-lg text-stone-100 shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'}>
                  {loading ? 'Loading...' : 'Login'}
                </button>
              </div>
            </form>

            <p className={'text-center text-stone-400'}>Doesn't have an account? {' '}
              <Link to={'/register'} className={'text-red-600 underline hover:text-red-800'}>Sign up here</Link></p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Login;
