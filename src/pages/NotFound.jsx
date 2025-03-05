import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <main className="grid min-h-screen place-items-center bg-stone-100 px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-xl font-semibold text-red-600">404</p>

          <h1 className="logo-font mt-4 text-5xl font-semibold tracking-tight text-balance text-stone-900 sm:text-7xl">
            Page not found</h1>

          <p className="mt-12 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.</p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to={'/'}
                  className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-stone-100 shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Go back home</Link>

            <a href="https://github.com/reenatoteixeira/mealmind/issues/new"
               className="text-sm font-semibold text-stone-900">
              Contact support <span aria-hidden="true">&rarr;</span></a>
          </div>
        </div>
      </main>
    </>
  );
}

export default NotFound;
