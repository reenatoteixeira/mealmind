import { Helmet } from 'react-helmet-async';
import Header from '../components/Header.jsx';
import comingSoonGIF from '../assets/images/coming-soon.gif';

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

      <Header />

      <section className={'min-h-screen bg-stone-100 text-stone-950 text-center flex items-center justify-center'}>
        <div className={'container flex flex-col justify-center items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}>
          <img src={comingSoonGIF} alt={'GIF showing an animated "Coming Soon" text.'} className={'w-1/2'} />

          <p className={'mb-4 text-stone-300'}>You're in the 'Register' page</p>

          <h1 className={'text-xl font-bold text-red-600 md:text-3xl'}>
            Your Smart Recipe Organizer is Cooking! </h1>

          <p className={'opacity-75 md:text-xl'}>
            We’re crafting a smarter way to save, share, and discover recipes —
            tailored just for you!</p>

          <p className={'my-8 md:text-xl'}>
            Stay tuned! MealMind is coming soon with delicious features. </p>

          <p className={'opacity-50 text-sm md:text-lg'}>
            In the meantime, follow updates on our {' '}
            <a href={'https://github.com/reenatoteixeira/mealmind'} className={'text-red-600 underline'}>
              GitHub
            </a>
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
