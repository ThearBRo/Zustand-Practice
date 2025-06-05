import { useEffect } from "react";
import { useCategoriesStore } from "./store/useStore";

const Catagories = () => {
  const { categories, searchQuery, setCate, setSearchQuery } =
    useCategoriesStore();

  useEffect(() => {
    const fetchdata = async () => {
      await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then((res) => res.json())
        .then((data) => setCate(data.categories));
    };
    fetchdata();
  }, [setCate]);
  console.log(categories);

  const filterCate = categories.filter((cate) =>
    cate.strCategory.toLowerCase().includes(searchQuery.toLowerCase())
  );

  console.log(filterCate);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-teal-600">Search Category</h1>

      <input
        type="text"
        placeholder="Search for a Meal..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border border-teal-400 rounded-lg p-3 mb-8 w-96 text-center focus:outline-none focus:ring-2 focus:ring-teal-500"
      />

      <div>
        {filterCate.length > 0 ? (
          filterCate.map((cate) => (
            <div
              key={cate.idCategory}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
            >
              <img
                src={cate.strCategoryThumb}
                alt={cate.strCategory}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <p className="text-sm font-semibold text-teal-700 mb-2">
                {cate.strCategoryDescription}
              </p>
            </div>
          ))
        ) : (
          <p>No Category</p>
        )}
      </div>
    </div>
  );
};

export default Catagories;
