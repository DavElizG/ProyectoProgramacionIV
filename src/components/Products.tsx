import UseFetchGet from "../Hooks/UseFetchGet";
import React from 'react'

const Products = () => {
    const {data,loading,Error} = UseFetchGet();
    return (
        <>
        <div>
            {loading && (<span>Is Loading...</span>)}
            {Error && (<span>Error X</span>)}
    
    {data?.map((item:any) => (
      <li key={item.id}>
     <span> {item.id}</span> <br />
         <span> {item.name}</span>
      </li>
    ))}
    
    
        </div>
        </>
      )
}

export default Products
