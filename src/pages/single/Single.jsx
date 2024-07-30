import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Single = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  const handleHideToggle = () => {
    fetch(`http://localhost:4001/products/${productId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isVisible: false }),
    })
      .then(() => {
        // Optionally update the product state or navigate away after hiding
        setProduct((prevProduct) => ({ ...prevProduct, isVisible: false }));
      })
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetch(`http://localhost:4001/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((e) => console.log(e.message));
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className='single'>
      <Sidebar />
      <div className='singleContainer'>
        <Navbar />
        <div className='top'>
          <div className='left'>
            <div className='btnContainer'>
              <div>
                <button
                  className='editProductButton'
                  onClick={() => navigate(`/products/${productId}/edit`)}
                >
                  Edit
                </button>
              </div>
              <div>
                <button
                  className='hideProductButton'
                  onClick={handleHideToggle}
                >
                  Hide
                </button>
              </div>
            </div>
            <h1 className='title'>Information</h1>
            <div className='item'>
              <div className='details'>
                <h1 className='itemTitle'>{product.productName}</h1>
                <img src={product.url} alt='productImg' className='itemImg' />
                <div className='detailItem'>
                  <span className='itemKey'>Cost Price:</span>
                  <span className='itemValue'>Rs {product.costPrice}</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Retail Price:</span>
                  <span className='itemValue'>Rs {product.retailPrice}</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Discount:</span>
                  <span className='itemValue'>{product.discount}%</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Discounted Price:</span>
                  <span className='itemValue'>
                    Rs{" "}
                    {product.retailPrice -
                      (product.retailPrice * product.discount) / 100}
                  </span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Product ID:</span>
                  <span className='itemValue'>#{product.productId}</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Category ID:</span>
                  <span className='itemValue'>#{product.categoryId}</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Sub-Category ID:</span>
                  <span className='itemValue'>#{product.subCategoryId}</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Stock:</span>
                  <span className='itemValue'>{product.stock}</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Description:</span>
                  <span className='itemValue'>{product.description}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
