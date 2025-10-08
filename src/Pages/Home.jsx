import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, incrementPage } from "../redux/productsSlice";
import StaticCard from "../components/StaticCard";
import LiveCard from "../components/LiveCard";
import heroimg from "../assets/hero_img.png";
import Header from "../components/Header";

const SkeletonCard = () => (
  <div className="border rounded p-3 bg-light animate-pulse" style={{ height: "200px" }}></div>
);

const HomePage = () => {
  const dispatch = useDispatch();
  const { staticProducts, liveProducts, hasMoreStatic, hasMoreLive, loading, page } = useSelector(
    (state) => state.products
  );

  const observer = useRef();

  const lastProductRef = (node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (
        entries[0].isIntersecting &&
        (hasMoreStatic || hasMoreLive) // Load next page if either section has more
      ) {
        dispatch(incrementPage());
      }
    });
    if (node) observer.current.observe(node);
  };

  useEffect(() => {
    dispatch(fetchProducts({ page, limit: 10 }));
  }, [dispatch, page]);

  return (

    <div className="container-fluid p-0 m-0">
 <Header/>
 {/* page containt */}
<div className="container py-5">
     
      {/* Hero Section */}
      <section className="bg-primary text-white rounded-4 p-5 mb-5 d-flex flex-column flex-md-row align-items-center justify-content-between">
        <div>
          <h1 className="display-4 fw-bold">Templates Marketplace</h1>
          <p className="lead">
            Explore, preview, and buy high-quality templates & components for your projects.
          </p>
          <button className="btn btn-light text-primary fw-semibold px-4 py-2 mt-3">
            Browse Templates
          </button>
        </div>
        <img
          src={heroimg}
          alt="Hero Template"
          className="img-fluid rounded shadow mt-4 mt-md-0"
          style={{ maxWidth: "350px" }}
        />
      </section>

      {/* Static Products */}
      <section className="mb-5">
        <h2 className="fw-bold mb-4">Static Templates</h2>
        <div className="row g-4">
          {staticProducts.map((product, idx) => {
            if (staticProducts.length === idx + 1) {
              return (
                <div key={product._id} className="col-12 col-sm-6 col-lg-4" ref={lastProductRef}>
                  <StaticCard {...product} onClick={() => alert(`View ${product.title}`)} />
                </div>
              );
            } else {
              return (
                <div key={product._id} className="col-12 col-sm-6 col-lg-4">
                  <StaticCard {...product} onClick={() => alert(`View ${product.title}`)} />
                </div>
              );
            }
          })}
          {loading && Array.from({ length: 3 }).map((_, idx) => <div key={idx} className="col-12 col-sm-6 col-lg-4"><SkeletonCard /></div>)}
        </div>
      </section>

      {/* Live Products */}
      <section>
        <h2 className="fw-bold mb-4">Interactive Templates & Components</h2>
        <div className="row g-4">
          {liveProducts.map((product, idx) => {
            if (liveProducts.length === idx + 1) {
              return (
                <div key={product._id} className="col-12 col-sm-6 col-lg-4" ref={lastProductRef}>
                  <LiveCard {...product} />
                </div>
              );
            } else {
              return (
                <div key={product._id} className="col-12 col-sm-6 col-lg-4">
                  <LiveCard {...product} />
                </div>
              );
            }
          })}
          {loading && Array.from({ length: 3 }).map((_, idx) => <div key={idx} className="col-12 col-sm-6 col-lg-4"><SkeletonCard /></div>)}
        </div>
      </section>

      {!hasMoreStatic && !hasMoreLive && !loading && (
        <p className="text-center mt-4">No more products to display.</p>
      )}
    </div>

    </div>
    
  );
};

export default HomePage;
