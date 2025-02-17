import React, { useEffect, useState } from 'react'

function ScreenSize() {
    let [size,setSize] = useState(window.innerWidth);
    
    function handleEffect() {
        setSize(window.innerWidth)
    }
    useEffect(()=>{
        window.addEventListener("resize",handleEffect)

        return (()=>{
            window.removeEventListener("resize",handleEffect)
        })
    },[])

  return size;
}

export default ScreenSize