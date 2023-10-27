import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const ShowNavbar = ({ children }) => {

    const location = useLocation();

    const [showNavbar, setShowNavbar] = useState(false)

    useEffect(() => {
        if (location.pathname === '/') {
            setShowNavbar(false)
        } else {
            setShowNavbar(true)
        }
    })

    return (
        <div>{showNavbar && children}</div>
    )
}

export default ShowNavbar