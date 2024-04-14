import React, { useEffect, useState } from "react";
import categoryservice from "../../Service/categoryservice";
import { Link } from 'react-router-dom';
import Navbar from "./navbar";



const AllCategoryList = ({category}) => {
    const [categoryList, setCategoryList] = useState([]);
    const [msg, setMsg] = useState("");
    /*for displaying element on home screen*/
    useEffect(() => {
        init();
    }, []);
    //whenever an operation is performed in the page useState method is called

    const init = () => {
        categoryservice.getAllCategory().then((res) => {

            setCategoryList(res.data);
        }).catch((error) => {
            console.log(error);
        });
    }


    //code for delete button fuction

   {/**  const deleteProduct = (id) => {
        productservice.deleteProduct(id).then((res) => {
            setMsg("Delete Successfully");
            init();
            setTimeout(() => {
                    setMsg("");
                }, 3000);
        }).catch((error) => {
            console.log(error);
        })


    }*/}
    const deleteCategory = async (id) => {
        try {
            await categoryservice.deleteCategory(id);
            setMsg("Category deleted successfully");
            init(); // Reinitialize category list
            setTimeout(() => {
                setMsg("");
            }, 3000);
        } catch (error) {
            console.error("Error deleting category:", error);
            // You can handle the error here, such as displaying an error message
        }
    };

   

    return (

        <>
       <Navbar/>
        <Link to="/addCategory" class="btn btn-primary mt-4">Add Category</Link>
        <div className="container mt-3">
    <div className="row">
        <div className="col-md-12">
            <div className="card">
                <div className="card-header fs-3 text-center">
                    All CategoryList
                    {msg && <p className="fs-4 text-center text-success">{msg}</p>}
                </div>
                <div className="card-body">
                    <div className="table-responsive"> {/* Add table-responsive class */}
                        <table className="table table-sm"> {/* Add table-sm class */}
                            <thead>
                                <tr>
                                    <th scope="col">Sl No</th>
                                    <th scope="col">Category Name</th>
                                    <th scope="col">Actions</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {categoryList.map((c, num) => (
                                    <tr key={c.id}> {/* Add unique key prop */}
                                        <td>{num + 1}</td>
                                        <td>{c.categoryName}</td>
                                        <td>
                                            <Link to={'editProduct/'+c.id} className="btn btn-sm btn-primary">Edit</Link>
                                            <button onClick={() =>deleteCategory(c.id)} className="btn btn-sm btn-danger ms-1">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

          
        </>
    );
}
export default AllCategoryList;