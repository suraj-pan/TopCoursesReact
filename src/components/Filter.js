import React from "react";

const Filter = ({ filterData, Category, setCategory }) => {
  function FilterHanlder(title) {
    setCategory(title);
  }
  return (
    <div className="flex w-11/12 flex-wrap justify-center gap-y-3 mx-auto max-w-max py-3 space-x-4">
      {filterData.map((data) => (
        <button
          key={data.id}
          className={`text-lg rounded-md px-2 py-1 font-medium text-white bg-black hover:bg-opacity-50 border-2
          transition-all duration-300 ${
            Category === data.title
              ? "border-white bg-opacity-60"
              : "border-transparent bg-opacity-80"
          }
         `}
          onClick={() => FilterHanlder(data.title)}
        >
          {data.title}
        </button>
      ))}
    </div>
  );
};

export default Filter;
