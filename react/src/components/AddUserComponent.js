import React, {useEffect, useState} from 'react';
import UserService from "../services/UserService";
import {Link, useHistory,useParams} from "react-router-dom";
function AddUserComponent(props) {
    const [username,setUsername] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const history=useHistory();
    const {id} =useParams();

    const saveUser=(e) =>{
        e.preventDefault();
        const user={username,name,age,address}
        console.log(user);
        UserService.createUser(user)
            .then((res) =>{
                console.log(res.data);
                history.push('/');
            }).catch(e => console.log(e));

    }
    const updateUser=(e) =>{
        e.preventDefault();
        const user={username,name,age,address}
        console.log(user);
        UserService.updateUser(user)
            .then((res)=>{
                history.push('/')
            }).catch(err => console.log(err));
    }
    useEffect(() => {
        return () => {
           UserService.getEmployeeById(id)
               .then((res) =>{
                   setName(res.data.username)
                   setName(res.data.name);
                   setAddress(res.data.address);
                   setAge(res.data.age);
               }).catch(err =>{
                   console.log(err);
           });
        };
    }, []);

   const title = () => {
        if(id){
            return <h2 className="text-center">Update User</h2>
        }
        else {
            return <h2 className="text-center">Add User</h2>
        }
    }

    return (
        <div>
            <br/>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {
                            title()
                        }
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label">Username :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter username"
                                        name="Username"
                                        className="form-control"
                                        value={username}
                                        onChange={(e)=>setUsername(e.target.value)}
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Name :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Name"
                                        name="Name"
                                        className="form-control"
                                        value={name}
                                        onChange={(e)=>setName(e.target.value)}
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Age :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter age"
                                        name="Age"
                                        className="form-control"
                                        value={age}
                                        onChange={(e)=>setAge(e.target.value)}
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Address :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Address"
                                        name="Address"
                                        className="form-control"
                                        value={address}
                                        onChange={(e)=>setAddress(e.target.value)}
                                    />
                                </div>
                                <button className="btn btn-success" onClick={
                                    (e) => {
                                        if (id) {
                                            updateUser(e)
                                        } else {
                                            saveUser(e)
                                        }
                                    }}>
                                    Save
                                </button>
                                <Link to="/" className="btn btn-danger">Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddUserComponent;