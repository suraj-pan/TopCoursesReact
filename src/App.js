import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

const App = () => {
  const [Courses, setCourses] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [Category, setCategory] = useState(filterData[0].title);

  useEffect(() => {
    setLoading(true);
    const api = async () => {
      try {
        const data = await fetch(apiUrl);
        const res = await data.json();
        setCourses(res.data);
        // console.log(res.data);
      } catch (error) {
        toast.error("something went Wrong");
      }
    };
    setLoading(false);
    api();
  }, []);

  // console.log(Courses);

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Navbar />
      </div>

      <div className="bg-bgDark2">
        <div>
          <Filter
            Category={Category}
            setCategory={setCategory}
            filterData={filterData}
          />
        </div>

        <div className="w-[11/12] max-w-[1200px] flex flex-wrap justify-center items-center mx-auto min-h-[50vh]">
          {Loading ? (
            <Spinner />
          ) : (
            <Cards Courses={Courses} Category={Category} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
