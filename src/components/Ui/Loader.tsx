const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <div
        className="spinner-border animate-spin inline-block w-4 h-4 border-1 rounded-full"
        role="status"
      >
        <span className="visually-hidden h-14 w-14 rounded-full border-4"></span>
      </div>
    </div>
  );
};

export default Loader;
