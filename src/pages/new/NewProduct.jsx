import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect } from "react";
import Select from "react-select";

const NewProduct = () => {
  const initialDetails = {
    productName: "",
    productId: "",
    category: null,
    categoryId: "",
    subCategory: null,
    subCategoryId: "",
    description: "",
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
    fetch("http://localhost:4002/categories")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Data:", data); // Log fetched data in detail
        const formattedCategories = data.map((cat) => ({
          value: cat.id,
          label: cat.name,
        }));
        const formattedSubCategories = data.flatMap((cat) =>
          cat.subCategories.map((subCat) => ({
            value: subCat.id,
            label: subCat.name,
          }))
        );
        console.log("Formatted Categories:", formattedCategories); // Log formatted categories
        console.log("Formatted SubCategories:", formattedSubCategories); // Log formatted subcategories
        setCategories(formattedCategories);
        setSubCategories(formattedSubCategories);
      })
      .catch((e) => console.log(e.message));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
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
    console.log(details);
    setDetails(initialDetails);
  };

  return (
    <div className='new'>
      <Sidebar />
      <div className='addContainer'>
        <h1>Add Product</h1>
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
            <p>Description</p>
            <textarea
              name='description'
              type='text'
              placeholder='Description'
              value={details.description}
              onChange={handleChange}
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
              placeholder='selling Price'
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
            <button type='submit'>Add Product</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
