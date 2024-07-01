import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';

function Edit_user() {
    const dispatch = useDispatch();
    const [formvalue, setFormvalue] = useState({
        name: "",
        mobile: "",
        img: "",
    });

    const { user } = useSelector((state) => state.user);
    useEffect(() => {
        editdata();
    }, []);

    const { id } = useParams();
    const editdata = () => {
        const edit_data = user.filter((value) => { return value.id == id });
        console.log(edit_data[0]);
        setFormvalue(edit_data[0]);
    }
        const changeHandel = (e) => {
            setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
            console.log(formvalue);
        }
    
    return (
        <div>

        </div>
    )
}

export default Edit_user
