import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Redirect() {
    const navigate = useNavigate();
    useEffect(()=>{
        navigate("/pages/1")
    })
    return (
        <div></div>
    )
}

export default Redirect