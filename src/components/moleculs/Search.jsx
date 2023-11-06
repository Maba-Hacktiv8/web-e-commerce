import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaMagnifyingGlass } from "react-icons/fa6";
const Search = () => {
  const [input, setInput] = useState("");

  let navigate = useNavigate();

  // take input value from search
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // navigate to the search page with the input value
  const handleSearch = () => {
    navigate(`/search/${input}`);
    setInput("");
  };
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search For..."
        value={input}
        onChange={handleInputChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        className="w-[435px] md:w-[720px] lg:w-[1235px] rounded-md px-2 mx-5 md:py-1 pe-2 shadow-sm sm:text-sm border border-slate-300"
      />
      <span className="absolute inset-y-1  end-6 grid w-10 place-content-center">
        <button
          type="button"
          className="text-gray-600 hover:text-gray-700"
          onClick={handleSearch}
        >
          <FaMagnifyingGlass />
        </button>
      </span>
    </div>
  );
};

export default Search;
