import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import productservice from "../../Service/productservice";


import Navbar from './navbar';

const AddProduct = () => {
    const [product, setProduct] = useState({
        productName: "",
        description: "",
        price: "",
        status: "",
    });

    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const ProductRegister = (e) => {
        e.preventDefault();
        productservice
            .saveProduct(product)
            .then((res) => {
                setMsg("Product Added Successfully");



                // Reset form fields after successful submission
                setProduct({
                    productName: "",
                    description: "",
                    price: "",
                    status: "",
                });
                setTimeout(() => {
                    setMsg("");
                }, 3000);

                navigate("/home"); // Navigate to AllProductList page after successful addition

            })
            .catch((error) => {
                console.log(error);
                setMsg("Failed to add product. Please try again later.");
            });
    };
    {/*upload image */ }
    const [file, setFile] = useState(null);
    const formRef = useRef(null); // Define the formRef variable

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) {
            alert('Please select an image.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            await axios.post('http://localhost:8085/saveImage', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('Image uploaded successfully!');
            // After successful upload, reset the file input value
          {/**if (formRef.current) {
                formRef.current.reset();
                ref={formRef}
            } */}  

            // Reset the file state
            setFile(null);
        } catch (error) {
            console.error('Error uploading image:', error);
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error('Server responded with status:', error.response.status);
                console.error('Response data:', error.response.data);
                alert('Failed to upload image. Server responded with status: ' + error.response.status);
            } else if (error.request) {
                // The request was made but no response was received
                console.error('No response received from server.');
                alert('Failed to upload image. No response received from server.');
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error setting up request:', error.message);
                alert('Failed to upload image. Error setting up request: ' + error.message);
            }
        }
    };
    return (
        <>
       <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header fs-3 text-center">
                            Add Product
                            {msg && (
                                <p className="fs-4 text-center text-success">
                                    {msg}
                                </p>
                            )}
                        </div>



                        <div className="card-body">
                            <form onSubmit={ProductRegister}>
                                <div className="mb-3">
                                    <label>Enter Product Name</label>
                                    <input
                                        type="text"
                                        name="productName"
                                        className="form-control"
                                        onChange={handleChange}
                                        value={product.productName}
                                        required />
                                </div>
                                <div className="mb-3">
                                    <label>Enter Description</label>
                                    <input
                                        type="text"
                                        name="description"
                                        className="form-control"
                                        onChange={handleChange}
                                        value={product.description}
                                        required />
                                </div>
                                <div className="mb-3">
                                    <label>Enter Price</label>
                                    <input
                                        type="number"
                                        name="price"
                                        className="form-control"
                                        onChange={handleChange}
                                        value={product.price}
                                        required />
                                </div>
                                <div className="mb-3">
                                    <label>Enter Status</label>
                                    <input
                                        type="text"
                                        name="status"
                                        className="form-control"
                                        onChange={handleChange}
                                        value={product.status}
                                        required />
                                        
                                        
                                    <form >

                                        <label class="mt-4">Upload Image</label>
                                        <div className="mt-2">
                                            <input type="file" className="form-control-file border mr-2 ml-2 bg-white" style={{ borderColor: 'grey' }} onChange={handleFileChange} />
                                            {/**<button class="btn btn-success" onClick={handleUpload}>Upload Image</button> */}
                                        </div>
                                    </form>

                                </div>

                                <button onClick={handleUpload} className="btn btn-primary col-md-12">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default AddProduct;
