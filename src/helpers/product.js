import axios from "axios";

//get searched products
export const searchProducts = async (searchText) => {
  const BASE_URL = "https://api.luxurymjhomes.com/";

  // const formData = new FormData();
  // formData.append("searchText", searchText);
  // const config = {
  //   headers: {
  //     "Content-Type": "multipart/form-data",
  //   },
  // };
  const { data } = await axios.get(`${BASE_URL}product/`, {
    params: { q: searchText },
  });
  return data;
};

// get products
export const getProducts = (products, subcategory, type, limit) => {
  const finalProducts = subcategory
    ? products.filter(
      (product) =>
        product.subcategory.filter((single) => single == subcategory)[0]
    )
    : products;

  if (type && type == "new") {
    const newProducts = finalProducts.filter((single) => single.new);
    return newProducts.slice(0, limit ? limit : newProducts.length);
  }
  if (type && type == "bestSeller") {
    const newProducts = finalProducts.filter((single) => single.bestSeller);
    return newProducts.slice(0, limit ? limit : newProducts.length);
  }
  if (type && type == "saleItems") {
    const saleItems = finalProducts.filter(
      (single) => single.discount && single.discount > 0
    );
    return saleItems.slice(0, limit ? limit : saleItems.length);
  }
  return finalProducts.slice(0, limit ? limit : finalProducts.length);
};

// get products based on tag
export const getProductsByTag = (products, tag, type, limit) => {
  const finalProducts = tag
    ? products.filter(
      (product) => product.tag.filter((single) => single == tag)[0]
    )
    : products;

  if (type && type == "new") {
    const newProducts = finalProducts.filter((single) => single.new);
    return newProducts.slice(0, limit ? limit : newProducts.length);
  }
  if (type && type == "bestSeller") {
    return finalProducts
      .sort((a, b) => {
        return b.saleCount - a.saleCount;
      })
      .slice(0, limit ? limit : finalProducts.length);
  }
  if (type && type == "saleItems") {
    const saleItems = finalProducts.filter(
      (single) => single.discount && single.discount > 0
    );
    return saleItems.slice(0, limit ? limit : saleItems.length);
  }
  return finalProducts.slice(0, limit ? limit : finalProducts.length);
};

// get product discount price
export const getDiscountPrice = (price, discount) => {
  return discount && discount > 0 ? price - price * (discount / 100) : null;
};

// get product cart quantity
export const getProductCartQuantity = (cartItems, product, color, size) => {
  let productInCart = cartItems.filter(
    (single) =>
      single.id == product.id &&
      (single.selectedProductColor
        ? single.selectedProductColor == color
        : true) &&
      (single.selectedProductSize ? single.selectedProductSize == size : true)
  )[0];
  if (cartItems.length >= 1 && productInCart) {
    if (product.variation) {
      return cartItems.filter(
        (single) =>
          single.id == product.id &&
          single.selectedProductColor == color &&
          single.selectedProductSize == size
      )[0].quantity;
    } else {
      return cartItems.filter((single) => product.id == single.id)[0].quantity;
    }
  } else {
    return 0;
  }
};

//get products based on category
export const getSortedProducts = (products, sortType, sortValue) => {

  if (products && sortType && sortValue) {
    if (sortType == "multicolor") {

      return products.filter((product) => {
        return product.variation
          ? product.variation.filter((single) => sortValue.includes(single.color))[0]
          : false;
      });
    }

    if (sortType == "multicategory") {

      return products.filter((product) => {
        return product.subcategory
          ? product.subcategory.filter((single) => sortValue.includes(single))[0]
          : false;
      });
    }
    if (sortType == "category") {

      return products.filter((product) => {
        return product.subcategory
          ? product.subcategory.filter((single) => single == sortValue)[0]
          : false;
      });
    }
    if (sortType == "tag") {
      return products.filter((product) => {
        return product.tag
          ? product.tag.filter((single) => single == sortValue)[0]
          : false;
      });
    }
    if (sortType == "color") {
      return products.filter(
        (product) =>
          product.variation &&
          product.variation.filter((single) => single.color == sortValue)[0]
      );
    }
    if (sortType == "size") {
      return products.filter(
        (product) =>
          product.variation &&
          product.variation.filter(
            (single) =>
              single.size.filter((single) => single.name == sortValue)[0]
          )[0]
      );
    }
    if (sortType == "filterSort") {
      let sortProducts = [...products];
      if (sortValue == "default") {
        return sortProducts;
      }
      if (sortValue == "priceHighToLow") {
        return sortProducts.sort((a, b) => {
          return b.variation[0].price - a.variation[0].price;
        });
      }
      if (sortValue == "priceLowToHigh") {
        return sortProducts.sort((a, b) => {
          return a.variation[0].price - b.variation[0].price;
        });
      }
    }
  }
  return products;
};

// get individual element
const getIndividualItemArray = (array) => {
  let individualItemArray = array.filter(function (v, i, self) {
    return i == self.indexOf(v);
  });
  return individualItemArray;
};

// get individual categories
export const getIndividualCategories = (products) => {
  let productCategories = [];
  products &&
    products.map((product) => {
      return (
        product.subcategory &&
        product.subcategory.map((single) => {
          return productCategories.push(single);
        })
      );
    });
  const individualProductCategories = getIndividualItemArray(productCategories);
  return individualProductCategories;
};

// get individual tags
export const getIndividualTags = (products) => {
  let productTags = [];
  products &&
    products.map((product) => {
      return (
        product.tag &&
        product.tag.map((single) => {
          return productTags.push(single);
        })
      );
    });
  const individualProductTags = getIndividualItemArray(productTags);
  return individualProductTags;
};

// get individual colors
export const getIndividualColors = (products) => {
  let productColors = [];
  products &&
    products.map((product) => {
      return (
        product.variation &&
        product.variation.map((single) => {
          return productColors.push(single.color);
        })
      );
    });
  const individualProductColors = getIndividualItemArray(productColors);
  return individualProductColors;
};

// get individual sizes
export const getProductsIndividualMaterial = (products) => {
  let productMaterial = [];
  products &&
    products.map((product) => {
      return (
        product.variation &&
        product.variation.map((single) => {
          return productMaterial.push(single.material);
        })
      );
    });
  const individualProductMaterial = getIndividualItemArray(productMaterial);
  return individualProductMaterial;
};

// get product individual sizes
export const getIndividualSizes = (product) => {
  let productSizes = [];
  product.variation &&
    product.variation.map((singleVariation) => {
      return (
        singleVariation.size &&
        singleVariation.size.map((singleSize) => {
          return productSizes.push(singleSize.name);
        })
      );
    });
  const individualSizes = getIndividualItemArray(productSizes);
  return individualSizes;
};

export const setActiveSort = (e) => {
  const filterButtons = document.querySelectorAll(
    ".sidebar-widget-list-left button, .sidebar-widget-tag button, .product-filter button"
  );
  // filterButtons.forEach((item) => {
  //   item.classList.remove("active");
  // });
  if (e.currentTarget.classList == "active") {
    e.currentTarget.classList.remove("active")
  } else {
    e.currentTarget.classList.add("active");
  }



};

export const setActiveLayout = (e) => {
  const gridSwitchBtn = document.querySelectorAll(".shop-tab button");
  gridSwitchBtn.forEach((item) => {
    item.classList.remove("active");
  });
  e.currentTarget.classList.add("active");
};

export const toggleShopTopFilter = (e) => {
  const shopTopFilterWrapper = document.querySelector(
    "#product-filter-wrapper"
  );
  shopTopFilterWrapper.classList.toggle("active");
  if (shopTopFilterWrapper.style.height) {
    shopTopFilterWrapper.style.height = null;
  } else {
    shopTopFilterWrapper.style.height =
      shopTopFilterWrapper.scrollHeight + "px";
  }
  e.currentTarget.classList.toggle("active");
};
