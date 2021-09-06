import axios from "axios";
import { useEffect, useState } from "react";
import CategoriesCard from "./CategotiesCard";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API}category`,
      });
      setCategories(response.data);
    }
    getCategories();

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="container p-4">
        <h1 className="mb-4">Categoría</h1>
        <div className="table-responsive">
          <table className="table table-hover table-striped border-1 ">
            <thead className="fs-5">
              <tr>
                <td>Categoría</td>
                <td>Descripción</td>
                <td>Acciones</td>
              </tr>
            </thead>
            <tbody className="p-0">
              {categories.map((category) => (
                <CategoriesCard
                  key={category.id}
                  category={category}
                  categories={categories}
                  setCategories={setCategories}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Categories;
