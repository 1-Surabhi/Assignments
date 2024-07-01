import React, { useEffect, useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { user_delete, user_get, user_update } from '../Userslice'



function Home() {
    const redirect = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(user_get());
    });

    const { demo, user } = useSelector((state) => { return state.user });

    const [formvalue, setFormvalue] = useState({
        name: "",
        email: "",
        mobile: "",
        img: "",
    });
    const editHandel = (id) => {
        const edit_data = user.filter((value) => { return value.id == id });
        console.log(edit_data[0]);
        setFormvalue(edit_data[0]);
    }

    const changeHandel = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    const vadidation = () => {
        var result = true;
        if (formvalue.name == "") {
            toast.error('Name Field is required !')
            result = false;
            return false;
        }
        if (formvalue.email == "") {
            toast.error('email Field is required !')
            result = false;
            return false;
        }


        if (formvalue.mobile == "") {
            toast.error('mobile Field is required !')
            result = false;
            return false;
        }
        if (formvalue.img == "") {
            toast.error('img Field is required !')
            result = false;
            return false;
        }
        return result;
    }

    const submitHandel = async (e) => {
        e.preventDefault();
        if (vadidation()) {
            dispatch(user_update(formvalue));
            toast.success('User Update Success');
            setFormvalue({ ...formvalue, name: "", email: "", mobile: "", img: "" });
            return redirect('/');
        }
    }

    return (
        <>
            <Header />
            <h1>{demo}</h1>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-12">
                        <h2 align="center" className='mb-5'>Manage User </h2>
                        <Link to="/add_user" className='btn btn-primary float-end mb-5'>Add Data</Link>
                        <div className="container">

                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Password</th>
                                        <th>Mobile</th>
                                        <th>Image</th>
                                        <th align="center">Action</th>
                                    </tr>

                                </thead>
                                <tbody>
                                    {
                                        user && user.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{item.id}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.password}</td>
                                                    <td>{item.mobile}</td>
                                                    <td>
                                                        <img src={item.img} width="50px" alt="" />
                                                    </td>
                                                    <td align="center">
                                                        <button className='btn btn-primary m-1' data-bs-toggle="modal" data-bs-target="#myModal" onClick={() => editHandel(item.id)}>Edit</button>
                                                        <button className='btn btn-danger m-1' onClick={() => { dispatch(user_delete(item.id)) }}>Delete</button>
                                                        <button className='btn btn-success m-1'>Status</button>
                                                    </td>
                                                </tr>
                                            )
                                        })

                                    }

                                </tbody>
                            </table>
                        </div>


                    </div>

                </div>
            </div>

            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <h4 className="modal-title">Edit User</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" />
                        </div>
                        {/* Modal body */}
                        <div className="modal-body">
                            <form action="" method='post' onSubmit={submitHandel} >
                                <div className="mb-3 mt-3">
                                    <label htmlFor="email" className="form-label">Name:</label>
                                    <input type="text" value={formvalue.name} onChange={changeHandel} className="form-control" placeholder="Enter Name" name="name" />
                                </div>
                                <div className="mb-3 mt-3">
                                    <label htmlFor="email" className="form-label">Email:</label>
                                    <input type="email" value={formvalue.email} onChange={changeHandel} className="form-control" placeholder="Enter email" name="email" />
                                </div>
                                <div className="mb-3 mt-3">
                                    <label htmlFor="email" className="form-label">Mobile:</label>
                                    <input type="number" value={formvalue.mobile} onChange={changeHandel} className="form-control" placeholder="Enter Mobile" name="mobile" />
                                </div>
                                <div className="mb-3 mt-3">
                                    <label htmlFor="email" className="form-label">Upload Image:</label>
                                    <input type="url" value={formvalue.img} onChange={changeHandel} className="form-control" name="img" />
                                </div>

                                <button type="submit" data-bs-dismiss="modal" className="btn btn-primary">Save</button>
                            </form>
                        </div>
                        {/* Modal footer */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>

    )
}

export default Home