import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import useTitle from '../../Hooks/useTitle';

const MyToys = () => {

    useTitle('My Toys');
    const {user} = useContext(AuthContext)

    const [data, setData] = useState([]);


    useEffect(() =>{
        fetch(`http://localhost:5000/userData/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    } ,[user])


    


    return (
        <div>
            <h3>My Toys page</h3>
            <p>User Name : {data.email}</p>
        </div>
    );
};

export default MyToys;