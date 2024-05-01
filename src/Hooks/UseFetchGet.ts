import React, { useEffect, useState } from 'react'

const UseFetchGet = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [Error, setError] = useState(false);
    const API = 'https://jsonplaceholder.typicode.com/users';

    useEffect(() => {
    function_fetch();
    }, [])

    const function_fetch = () =>{
    fetch(API)
    .then((response) => response.json())
    .then((data) => {
        setData(data), console.log(data);})
    .catch((Error) => setError(Error))
    .finally(() => setLoading(false));
    }




    return {data,loading,Error}
    }

    export default UseFetchGet