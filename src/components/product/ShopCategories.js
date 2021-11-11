import PropTypes from "prop-types";
import React, { useState } from "react";
import { setActiveSort } from "../../helpers/product";
import { useDispatch } from "react-redux";
import { reload } from "../../redux/actions/productActions";

const ShopCategories = ({ categories, getSortParams }) => {
  const dispatch = useDispatch();
  const [multicategory, setmulticategory] = useState([]);
  return (
    <div className="sidebar-widget">
      <h4 className="pro-sidebar-title">Categories </h4>
      <div className="sidebar-widget-list mt-30">
        {categories ? (
          <ul>
            {/* <li>
              <div className="sidebar-widget-list-left">
                <button
                  onClick={e => {
                    getSortParams("multicategory", []);
                    setActiveSort(e);
                  }}
                >
                  <span className="checkmark" /> All Categories
                </button>
              </div>
            </li> */}
            {categories.map((category, key) => {
              return (
                <li key={key}>
                  <div className="sidebar-widget-list-left">
                    <button
                      onClick={e => {
                        let new_arr = multicategory;
                        if (e.currentTarget.classList == "active") {

                          new_arr = new_arr.filter((ele) => ele != category);

                        } else {
                          new_arr.push(category);
                        }
                        // console.log(new_arr);
                        getSortParams("multicategory", new_arr);
                        setActiveSort(e);
                        setmulticategory(new_arr)
                        dispatch(reload());
                      }}
                    >
                      {" "}
                      <span className="checkmark" /> {category}{" "}
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          "No categories found"
        )}
      </div>
    </div>
  );
};

ShopCategories.propTypes = {
  categories: PropTypes.array,
  getSortParams: PropTypes.func
};

export default ShopCategories;
