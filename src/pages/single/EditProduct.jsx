import "./editProduct.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Select from "react-select";

const EditProduct = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const initialDetails = {
    productName: "",
    productId: "",
    category: null,
    categoryId: "",
    subCategory: null,
    subCategoryId: "",
    stock: "",
    url: "",
    costPrice: "",
    retailPrice: "",
    adjustedPrice: "",
    sellingPrice: "",
    discount: "",
  };

  const [details, setDetails] = useState(initialDetails);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4001/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setDetails({
          productName: data.productName,
          productId: data.productId,
          category: { value: data.categoryId, label: data.categoryName },
          categoryId: data.categoryId,
          subCategory: {
            value: data.subCategoryId,
            label: data.subCategoryName,
          },
          subCategoryId: data.subCategoryId,
          stock: data.stock,
          url: data.url,
          costPrice: data.costPrice,
          retailPrice: data.retailPrice,
          discount: data.discount,
        });
      })
      .catch((e) => console.log(e.message));
  }, [productId]);

  useEffect(() => {
    fetch("http://localhost:4002/categories")
      .then((res) => res.json())
      .then((data) => {
        const formattedCategories = data.categories.map((cat) => ({
          value: cat.id,
          label: cat.name,
        }));
        const formattedSubCategories = data.categories.flatMap((cat) =>
          cat.subCategories.map((subCat) => ({
            value: subCat.id,
            label: subCat.name,
          }))
        );
        setCategories(formattedCategories);
        setSubCategories(formattedSubCategories);
      })
      .catch((e) => console.log(e.message));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (selectedOption, { name }) => {
    setDetails((prev) => {
      const newDetails = { ...prev, [name]: selectedOption };
      if (name === "category") {
        newDetails.categoryId = selectedOption.value;
      }
      if (name === "subCategory") {
        newDetails.subCategoryId = selectedOption.value;
      }
      return newDetails;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:4001/products/${productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    })
      .then((res) => res.json())
      .then(() => {
        navigate(`/products/${productId}`);
      })
      .catch((e) => console.log(e.message));
  };

  return (
    <div className='edit'>
      <Sidebar />
      <div className='editContainer'>
        <Navbar />
        <h1>Edit Product</h1>
        <div className='form'>
          <form onSubmit={handleSubmit}>
            <p>Product Name</p>
            <input
              type='text'
              placeholder='Product Name'
              name='productName'
              value={details.productName}
              onChange={handleChange}
            />
            <p>Product ID</p>
            <input
              type='text'
              placeholder='Product ID'
              name='productId'
              value={details.productId}
              onChange={handleChange}
            />
            <p>Category</p>
            <Select
              name='category'
              options={categories}
              value={details.category}
              onChange={handleSelectChange}
              placeholder='Select Category'
            />
            <p>Category ID</p>
            <input
              type='text'
              placeholder='Category ID'
              name='categoryId'
              value={details.categoryId}
              readOnly
            />
            <p>Sub Category</p>
            <Select
              name='subCategory'
              options={subCategories}
              value={details.subCategory}
              onChange={handleSelectChange}
              placeholder='Select Sub Category'
            />
            <p>Sub Category ID</p>
            <input
              type='text'
              placeholder='Sub Category ID'
              name='subCategoryId'
              value={details.subCategoryId}
              readOnly
            />
            <p>Stock</p>
            <input
              type='text'
              placeholder='Stock'
              name='stock'
              value={details.stock}
              onChange={handleChange}
            />
            <p>Image URL</p>
            <input
              type='text'
              placeholder='URL'
              name='url'
              value={details.url}
              onChange={handleChange}
            />
            <p>Cost Price</p>
            <input
              type='number'
              placeholder='Cost Price'
              name='costPrice'
              value={details.costPrice}
              onChange={handleChange}
            />
            <p>Retail Price</p>
            <input
              type='number'
              placeholder='Retail Price'
              name='retailPrice'
              value={details.retailPrice}
              onChange={handleChange}
            />
            <p>Adjusted Price</p>
            <input
              type='number'
              placeholder='Adjusted Price'
              name='adjustedPrice'
              value={details.adjustedPrice}
              onChange={handleChange}
            />
            <p>Selling Price</p>
            <input
              type='number'
              placeholder='Selling Price'
              name='sellingPrice'
              value={details.sellingPrice}
              onChange={handleChange}
            />
            <p>Discount</p>
            <input
              type='number'
              placeholder='Discount'
              name='discount'
              value={details.discount}
              onChange={handleChange}
            />
            <br />
            <button type='submit'>Save Changes</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
