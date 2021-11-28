import PropTypes from "prop-types";
import React from "react";
import ThreeD from "../3dmodel/ThreeD";
import { useEffect } from "react";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import Carousel from 'react-bootstrap/Carousel'
//get searched products



const productImageGalleryMobile = ({ product, selectedVariation }) => {

    return (
        <div className="product-large-image-wrapper product-large-image-wrapper--sticky">
            {product.discount || product.new ? (
                <div className="product-img-badges">
                    {product.discount ? (
                        <span className="pink">-{product.discount}%</span>
                    ) : (
                        ""
                    )}
                    {product.new ? <span className="purple">New</span> : ""}
                </div>
            ) : (
                ""
            )}
            <LightgalleryProvider>
                <div className="product-sticky-image mb--10">
                    {product["model3d"] && (
                        <div className="product-sticky-image__single-3d mb-10">
                            <ThreeD url={product["model3d"]} />
                        </div>
                    )}

                    {(selectedVariation && selectedVariation != "") ? (

                        <div className="product-sticky-image__single mb-10" >
                            <div >
                                <LightgalleryItem
                                    group="any"
                                    src={selectedVariation}
                                    style={{ marginLeft: "5vw" }}
                                >
                                    <button>
                                        <i className="pe-7s-expand1"></i>
                                    </button>
                                </LightgalleryItem>

                                <img
                                    src={selectedVariation}
                                    alt=""
                                    className="img-fluid"

                                />

                            </div>
                        </div>
                    ) : (
                        <div className="product-sticky-image__single mb-10" >
                            <div >
                                <LightgalleryItem
                                    group="any"
                                    src={product.variation[0].image}
                                    style={{ marginLeft: "5vw" }}
                                >
                                    <button>
                                        <i className="pe-7s-expand1"></i>
                                    </button>
                                </LightgalleryItem>

                                <img
                                    src={product.variation[0].image}
                                    alt=""
                                    className="img-fluid"

                                />

                            </div>
                        </div>
                    )}
                </div>
            </LightgalleryProvider >
            <Carousel>
                {product.image &&
                    product.image.map((single, id) => {
                        return (
                            // <div className="product-sticky-image__single mb-10" key={id}>
                            //     <div key={id}>
                            //         <LightgalleryItem
                            //             group="any"
                            //             src={process.env.PUBLIC_URL + single}
                            //             style={{ marginLeft: "5vw" }}
                            //         >
                            //             <button>
                            //                 <i className="pe-7s-expand1"></i>
                            //             </button>
                            //         </LightgalleryItem>

                            //         <img
                            //             src={process.env.PUBLIC_URL + single}
                            //             alt=""
                            //             className="img-fluid"

                            //         />

                            //     </div>
                            // </div>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={process.env.PUBLIC_URL + single}
                                    alt="First slide"
                                />
                                {/* <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption> */}
                            </Carousel.Item>
                        );
                    })
                }
            </Carousel>
        </div >
    );
};

productImageGalleryMobile.propTypes = {
    product: PropTypes.object,
};

export default productImageGalleryMobile;
