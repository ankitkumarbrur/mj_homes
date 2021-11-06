import PropTypes from "prop-types";
import React, { useState } from "react";
import { setActiveSort } from "../../helpers/product";
import { useDispatch } from "react-redux";
import { reload } from "../../redux/actions/productActions";

const ShopColor = ({ colors, getSortParams }) => {
  const dispatch = useDispatch();
  const [multicolor, setmulticolor] = useState([]);

  return (
    <div className="sidebar-widget mt-50">
      <h4 className="pro-sidebar-title">Color </h4>
      <div className="sidebar-widget-list mt-20">
        {colors ? (
          <ul>
            <li>
              <div className="sidebar-widget-list-left">
                <button
                  onClick={e => {
                    getSortParams("multicolor", []);
                    setActiveSort(e);
                  }}
                >
                  <span className="checkmark" /> All Colors{" "}
                </button>
              </div>
            </li>
            {colors.map((color, key) => {
              return (
                <li key={key}>
                  <div className="sidebar-widget-list-left">
                    <button
                      onClick={e => {
                        let new_arr = multicolor;
                        if (e.currentTarget.classList == "active") {

                          new_arr = new_arr.filter((ele) => ele != color);

                        } else {
                          new_arr.push(color);
                        }
                        getSortParams("multicolor", new_arr);
                        setActiveSort(e);
                        setmulticolor(new_arr)
                        dispatch(reload());
                      }}
                    >
                      <span className="checkmark" /> {color}{" "}
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          "No colors found"
        )}
      </div>
    </div>
  );
};

ShopColor.propTypes = {
  colors: PropTypes.array,
  getSortParams: PropTypes.func
};

export default ShopColor;
