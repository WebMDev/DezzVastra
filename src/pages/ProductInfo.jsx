import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Cards } from "../assets/content.js";
import ButtonCTA from "../utility/ButtonCTA";

const ProductInfo = () => {
  const { id } = useParams();
  console.log(id);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const data = Cards.find((item) => item.id == id);
    setProduct(data);
  }, [id]);

  return (
    <>
      <section className="flex justify-center items-center w-full px-4 md:px-10 lg:px-20 my-10 common-padding">
        {!product ? (
          <h1 className="text-center py-20">Loading...</h1>
        ) : (
          <div className="flex flex-col md:flex-row gap-12 p-10 rounded-2xl w-full shadow-xl bg-white">
            
            {/* LEFT IMAGE SECTION */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={product.img}
                className="w-full h-full max-h-[550px] rounded-2xl object-cover border-2 border-amber-50 shadow-xl"
                alt={product.title}
              />
            </div>
            
            {/* RIGHT CONTENT SECTION */}
            <div className="w-full flex flex-col gap-4">
              <span className="px-3 py-1 bg-amber-600 text-white rounded-full w-fit text-sm font-semibold">
                Best Seller
              </span>

              <h1 className="text-3xl font-bold mb-2">{product.title}</h1>

              <div className="flex items-center gap-2 text-yellow-500 text-xl mb-2">
                ⭐⭐⭐⭐⭐
                <span className="text-gray-600 text-sm">(122 reviews)</span>
              </div>

              <p className="text-gray-700 mb-2 text-justify">{product.desc}</p>

              <div className="mb-2">
                <h3 className="text-lg font-semibold mb-2">Highlights:</h3>
                <ul className="list-disc text-gray-700 ml-5 space-y-1">
                  <li>Premium Quality Fabric</li>
                  <li>100% Handcrafted</li>
                  <li>Lightweight & Durable</li>
                  <li>Perfect for Daily & Casual Use</li>
                </ul>
              </div>

              <div className="mb-2 ">
                <h2 className="text-2xl font-bold text-green-700">
                  ₹ {product.price}
                </h2>
                <p className="text-gray-500 text-sm">Inclusive of all taxes</p>
              </div>

              <div className="flex justify-start items-center gap-3">
                <ButtonCTA
                  name={"Buy Now!"}
                  style={"mt-3 "}
                  onClick={() =>
                    window.open("https://wa.me/918989898989", "_blank")
                  }
                />
                <button className="px-4 py-3 bg-gray-800 text-white rounded-xl shadow hover:bg-gray-900">
                  ❤️
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
      {/* <h1>Product ID: {id}</h1> */}
    </>
  );
};

export default ProductInfo;
