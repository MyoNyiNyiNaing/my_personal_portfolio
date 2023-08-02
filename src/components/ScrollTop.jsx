import React, { useEffect, useRef, useState } from 'react'
import "./ScrollTop.css"
import {MdOutlineKeyboardArrowUp} from 'react-icons/md'

const ScrollTop = () => {
    const [scrollTop, setScrollTop] = useState(0)

    const backToTop = () => {
        
        document.documentElement.scrollTop= 0
    }

    const calcScrollTop = () => {
        setScrollTop(document.documentElement.scrollTop)
    }

    useEffect(()=> {
        window.addEventListener("scroll", calcScrollTop)
    }, [])
  return (
    <div className=' fixed bottom-[30px] right-[50px] z-50'>
        <div className={` ${scrollTop > 100 ? "show" : "hide"} bounce-btn-wrapper cursor-pointer`}>
        <div onClick={backToTop} className={`  bounce-btn w-12 h-12 bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500 text-white rounded-full flex items-center justify-center`} >
                    <MdOutlineKeyboardArrowUp className=' text-[30px]'/>
                </div>
        </div>
                
    </div>
  )
}

export default ScrollTop