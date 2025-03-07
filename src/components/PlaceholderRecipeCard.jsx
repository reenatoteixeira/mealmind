function PlaceholderRecipeCard() {
  return (
    <>
      <li
        className="flex flex-col min-h-52 bg-white border-1 border-stone-200 shadow-md shadow-stone-300 rounded-xl transition duration-500 sm:flex-row hover:scale-103 animate-pulse gap-4">
        <div
          className="h-40 bg-gray-300 rounded-t-lg w-full sm:h-auto sm:max-w-3xs sm:rounded-l-lg sm:rounded-t-none"></div>

        <div className={'flex flex-col w-full gap-4 p-4'}>
          <div className="h-6 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        </div>
      </li>
    </>
  );
}

export default PlaceholderRecipeCard;
