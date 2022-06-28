import React from 'react';
import {useState,useEffect} from "react";
import UserService from "../services/UserService";
import {Link} from "react-router-dom";

function ListUserComponent(props) {
    const[users,setUsers] =useState([]);

    useEffect(() => {
      getAllUsers();
    },[]);
    const  getAllUsers=()=>{
        UserService.getAllUsers()
            .then((res) =>{
                setUsers(res.data);
                console.log(res.data);
            }).catch(error =>{
            console.log(error);
        })
    }
   const deleteUser =(username)=>{
        UserService.deleteUser(username).then((res)=>{
            getAllUsers();
        }).catch(err => console.log(err));
    }
    return (
        <div className="container">
            <h2 className="text-center">List Users</h2>
            <Link to="/add-user" className="btn btn-primary mb-2" >Add User</Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th>Username</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                {
                    users.map((user)=>
                        <tr key={user.username}>
                            <td>{user.username}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.address}</td>
                            <td>
                                <Link className="btn btn-info" to={`/edit-user/${user.username}`}>Update</Link>
                                <button className="btn btn-danger" style={{marginLeft:"10px"}} onClick={()=>{
                                    deleteUser(user.username)
                                } }>Delete</button>
                            </td>
                        </tr>

                    )
                }
                </tbody>
            </table>
        </div>
    );
}

export default ListUserComponent;