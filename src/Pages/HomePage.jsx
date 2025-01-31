import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        React HackerRank Problems
      </h2>
      <div className="flex flex-col gap-4  text-black p-6">
        <Link
          to="/ItemListManager"
          className="flex items-center gap-2 text-lg font-semibold  hover:translate-x-2 transition-transform duration-300"
        >
          ➜ Item List Manager
        </Link>
        <Link
          to="/SlideShow"
          className="flex items-center gap-2 text-lg font-semibold  hover:translate-x-2 transition-transform duration-300"
        >
          ➜ Slide Show
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
