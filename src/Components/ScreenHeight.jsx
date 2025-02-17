import React, { useEffect, useState } from 'react'

function ScreenHeight() {
    const [height,setHeight] = useState(window.innerHeight);

    function handleHeight() {
        setHeight(window.innerHeight)
    }
    useEffect(()=>{
        document.addEventListener("resize",handleHeight)

        return(()=>{
            document.removeEventListener("resize",handleHeight)
        })
    })

  return height
}

export default ScreenHeight