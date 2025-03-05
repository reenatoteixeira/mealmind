import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function Home() {

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

      <section className={'min-h-screen bg-stone-100 text-stone-800 flex items-center justify-center'}>
        <div className={'w-full p-4 container max-w-xl space-y-6 sm:mx-auto sm:px-6'}>
          <div>
            <Link to={'/'} className={'px-4 py-2 text-red-600 rounded-lg transition-all hover:text-red-700'}>
              <i className={'uil uil-arrow-left'}></i> Back to home</Link>
          </div>

          <div className={'w-full space-y-6 sm:bg-white sm:px-6 sm:py-4 sm:rounded-2xl sm:shadow-lg'}>
            <h1 className={'logo-font text-4xl text-red-500 font-bold'}>Create account</h1>

            <form className={'space-y-6'}>
              <div className={'flex flex-col justify-center space-y-6 sm:flex-row sm:space-x-4 sm:space-y-0'}>
                <div className={'w-full'}>
                  <label htmlFor={'first-name'} className={'w-full'}>First name</label>
                  <input type={'text'} placeholder={'John'} id={'first-name'} required
                         className={'w-full px-3 py-2 bg-stone-300 text-stone-700 border-2 border-stone-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300'} />
                </div>

                <div className={'w-full'}>
                  <label htmlFor={'last-name'} className={'w-full'}>Last name</label>
                  <input type={'text'} placeholder={'Doe'} id={'last-name'} required
                         className={'w-full px-3 py-2 bg-stone-300 text-stone-700 border-2 border-stone-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300'} />
                </div>
              </div>

              <div>
                <label htmlFor={'email'} className={'w-full'}>E-mail</label>
                <input type={'email'} placeholder={'johndoe@example.com'} id={'email'} required
                       className={'w-full px-3 py-2 bg-stone-300 text-stone-700 border-2 border-stone-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300'} />
              </div>

              <div>
                <label htmlFor={'password'} className={'w-full'}>Password</label>
                <input type={'password'} placeholder={'********'} id={'password'} required
                       className={'w-full px-3 py-2 bg-stone-300 text-stone-700 border-2 border-stone-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300'} />

                <ul className={'bg-white p-2 rounded-md mt-2 text-stone-400 flex flex-col text-sm sm:bg-stone-100'}>
                  <li>Minimum 8 characters</li>
                  <li>At least one number</li>
                  <li>At least one uppercase letter</li>
                  <li>At least one special character</li>
                </ul>
              </div>

              <div>
                <label htmlFor={'password-check'} className={'w-full'}>Password confirmation</label>
                <input type={'password'} placeholder={'********'} id={'password-check'} required
                       className={'w-full px-3 py-2 bg-stone-300 text-stone-700 border-2 border-stone-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300'} />
              </div>

              <div className={'mt-4'}>
                <button
                  className={'w-full text-lg px-4 py-1 border-2 cursor-pointer border-red-600 bg-red-600 text-stone-100 rounded-lg transition-all hover:bg-red-500'}>
                  Create account
                </button>
              </div>
            </form>

            <p className={'text-center text-stone-400'}>Already have an account? {' '}
              <Link to={'/login'} className={'text-red-500 underline hover:text-red-700'}>Sign in here</Link></p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
