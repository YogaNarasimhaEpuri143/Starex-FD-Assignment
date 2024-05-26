const Shimmer = () => {
  const shimmers = new Array(20).fill(0).map((_, index) => {
    return (
      <div key={index}>
        <div className="bg-gray-700 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 bg-[length:200%_100%] animate-shimmer w-full h-64"></div>
      </div>
    );
  });
  return <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border border-black m-20">{shimmers}</div>;
};

export default Shimmer;

// <div className="w-full h-64 bg-gray-700 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 bg-[length:200%_100%] animate-shimmer"></div>;
