const Loader = () => (
  <div className="flex flex-col items-center justify-center h-64 w-full">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    <p className="mt-4 text-gray-500 animate-pulse">Loading data...</p>
  </div>
);

export default Loader;