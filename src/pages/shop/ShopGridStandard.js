import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from "react";
import MetaTags from "react-meta-tags";
import Paginator from "react-hooks-paginator";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { connect } from "react-redux";
import { searchProducts, getSortedProducts } from "../../helpers/product";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import ShopSidebar from "../../wrappers/product/ShopSidebar";
import ShopTopbar from "../../wrappers/product/ShopTopbar";
import ShopProducts from "../../wrappers/product/ShopProducts";
import { useToasts } from "react-toast-notifications";
import { getProducts } from "../../helpers/product";
// import { useGLTF } from "@react-three/drei";
// import { useHistory } from "react-router-dom";

const ShopGridStandard = ({ location, products, cb }) => {
  // let history = useHistory();
  // console.log(history);

  // const { nodes } = useGLTF("./shoe-draco.glb");
  // console.log(nodes);

  const [layout, setLayout] = useState("grid three-column");
  const [sortType, setSortType] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [filterSortType, setFilterSortType] = useState("");
  const [filterSortValue, setFilterSortValue] = useState("");
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [loading, setLoading] = useState(cb == undefined ? false : true);
  const [data, setData] = useState(cb);
  const { addToast } = useToasts();

  const pageLimit = 15;
  const { pathname } = location;

  const getLayout = (layout) => {
    setLayout(layout);
  };

  const getSortParams = (sortType, sortValue) => {
    setSortType(sortType);
    setSortValue(sortValue);
  };

  const getFilterSortParams = (sortType, sortValue) => {
    setFilterSortType(sortType);
    setFilterSortValue(sortValue);
  };

  useEffect(() => {
    if (loading) {
      Promise.resolve(cb)
        .then((res) => {
          setLoading(false);
          setData(res.data);
          // UNCOMMENT THIS AFTER CORRECTION IN API
          // products = data;
        })
        .catch((err) => {
          addToast("Unable to complete search request, try again", {
            appearance: "error",
            autoDismiss: true,
          });
          setLoading(false);
        });
    } else {
      let sortedProducts = getSortedProducts(products, sortType, sortValue);
      const filterSortedProducts = getSortedProducts(
        sortedProducts,
        filterSortType,
        filterSortValue
      );
      sortedProducts = filterSortedProducts;
      setSortedProducts(sortedProducts);
      setCurrentData(sortedProducts.slice(offset, offset + pageLimit));
    }
  }, [
    offset,
    products,
    sortType,
    sortValue,
    filterSortType,
    filterSortValue,
    loading,
  ]);

  //loader screen
  if (loading) {
    return (
      <div className="flone-preloader-wrapper">
        <div className="flone-preloader">
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }

  return (
    <Fragment>
      <MetaTags>
        <title>MJ Homes | Shop</title>
        <meta name="description" content="Shop furniture with MJ Homes." />
      </MetaTags>

      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>

      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Shop
      </BreadcrumbsItem>

      <LayoutOne>
        {/* breadcrumb */}
        <Breadcrumb />

        <div className="shop-area pt-95 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 order-2 order-lg-1">
                {/* shop sidebar */}
                <ShopSidebar
                  products={products}
                  getSortParams={getSortParams}
                  sideSpaceClass="mr-30"
                />
              </div>
              <div className="col-lg-9 order-1 order-lg-2">
                {/* shop topbar default */}
                <ShopTopbar
                  getLayout={getLayout}
                  getFilterSortParams={getFilterSortParams}
                  productCount={products.length}
                  sortedProductCount={currentData.length}
                />

                {/* shop page content default */}
                <ShopProducts layout={layout} products={currentData} />

                {/* shop product pagination */}
                <div className="pro-pagination-style text-center mt-30">
                  <Paginator
                    totalRecords={sortedProducts.length}
                    pageLimit={pageLimit}
                    pageNeighbours={2}
                    setOffset={setOffset}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    pageContainerClass="mb-0 mt-0"
                    pagePrevText="«"
                    pageNextText="»"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

ShopGridStandard.propTypes = {
  location: PropTypes.object,
  products: PropTypes.array,
};
const mapStateToProps = (state, props) => {
  console.log(props);
  const searchText = new URLSearchParams(props.location.search).get("q");
  if (searchText !== null) {
    return {
      products: getProducts(
        state.productData.products,
        props.subcategory,
        props.type,
        props.limit
      )
        ? getProducts(
            state.productData.products,
            props.subcategory,
            props.type,
            props.limit
          )
        : state.productData.products,
      cb: searchProducts(searchText),
    };
  } else {
    return {
      products: state.productData.products,
    };
  }
};

export default connect(mapStateToProps)(ShopGridStandard);
