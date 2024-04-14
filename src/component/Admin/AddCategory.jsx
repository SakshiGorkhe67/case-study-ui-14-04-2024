import React, { useState } from "react";
import categoryService from "../../Service/categoryservice"; // Make sure to import categoryService
import { useNavigate } from 'react-router-dom';
import Navbar from "./navbar";

const AddCategory = () => {
    const [category, setCategory] = useState({
        categoryName: "",
        
    });
    const [msg, setMsg] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCategory(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await categoryService.saveCategory(category);
            setMsg("Category added successfully");
            setCategory({ categoryName: ""});
            setTimeout(() => {
                setMsg("");
                navigate("/allcat");
            }, 3000);
        } catch (error) {
            console.error("Error adding category:", error);
            setError("Failed to add category. Please try again later.");
        }
    };

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card">
                            <div className="card-header fs-3 text-center">
                                Add Category
                            </div>
                            <div className="card-body">
                                {error && <div className="alert alert-danger">{error}</div>}
                                {msg && <div className="alert alert-success">{msg}</div>}
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label>Enter Category Name</label>
                                        <input type="text" name="categoryName" value={category.categoryName} onChange={handleChange} className="form-control" />
                                    </div>
                                   
                                    <button type="submit" className="btn btn-primary col-md-12">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddCategory;
