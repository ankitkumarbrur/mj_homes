import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";

const NavMenu = ({ strings, menuWhiteClass, sidebarMenu }) => {
  return (
    <div
      className={` ${sidebarMenu
          ? "sidebar-menu"
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`
        } `}
    >
      <nav>
        <ul>
          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>Home</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
              Shop
            </Link>
          </li>
          {/* <li>
            <Link
              onClick={() => {
                document
                  .querySelector("#offcanvas-mobile-menu")
                  .classList.add("active");
                document.querySelector("#products").classList.toggle("active");
              }}
            >
              Products
            </Link>
          </li> */}
          <li>
            <Link
              onClick={() => {
                document
                  .querySelector("#offcanvas-mobile-menu")
                  .classList.add("active");
                document.querySelector("#rooms").classList.toggle("active");
              }}
            >
              Rooms
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/B2B"}>B2B</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/Customize"}>Customize</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/about"}>About Us</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/contact"}>
              {strings["contact_us"]}
            </Link>
          </li>
          {/* <li>
						<Link
							target="_blank"
							to={process.env.PUBLIC_URL + "/google_form"}
						>
							Custom
						</Link>
					</li> */}
          {/* <li>
            <Link to={process.env.PUBLIC_URL + "/"}>{strings["pages"]}</Link>
            <ul className="submenu">
              <li>
                <Link to={process.env.PUBLIC_URL + "/cart"}>
                  {strings["cart"]}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/checkout"}>
                  {strings["checkout"]}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/wishlist"}>
                  {strings["wishlist"]}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/compare"}>
                  {strings["compare"]}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/my-account"}>
                  {strings["my_account"]}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/login-register"}>
                  {strings["login_register"]}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/about"}>
                  {strings["about_us"]}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/contact"}>
                  {strings["contact_us"]}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/not-found"}>
                  {strings["404_page"]}
                </Link>
              </li>
            </ul>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
  strings: PropTypes.object,
};

export default multilanguage(NavMenu);
