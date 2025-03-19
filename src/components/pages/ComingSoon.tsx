import comingSoonGIF from '../../assets/images/coming-soon.gif';

function ComingSoon() {
  return (
    <section className="min-h-screen bg-stone-100 text-stone-950 text-center flex items-center justify-center">
      <div className="container flex flex-col justify-center items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <img src={comingSoonGIF} alt='GIF showing an animated "Coming Soon" text.' className="w-1/2" />

        <h1 className="text-xl font-bold text-red-600 md:text-3xl">Your Smart Recipe Organizer is Cooking! </h1>

        <p className="opacity-75 md:text-xl">
          We’re crafting a smarter way to save, share, and discover recipes — tailored just for you!
        </p>

        <p className="my-8 md:text-xl">Stay tuned! MealMind is coming soon with delicious features. </p>

        <p className="text-stone-400 text-sm md:text-lg">
          In the meantime, follow updates on our{' '}
          <a
            href="https://github.com/reenatoteixeira/mealmind"
            className="opacity-50 transition-all text-red-600 underline hover:opacity-100"
          >
            GitHub
          </a>
        </p>
      </div>
    </section>
  );
}

export default ComingSoon;
