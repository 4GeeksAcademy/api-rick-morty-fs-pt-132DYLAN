import { Outlet } from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { useEffect } from "react"                                      
import useGlobalReducer from "../hooks/useGlobalReducer.jsx"            
import api_rick_morty from "../services/apirickandmorty.js"  
// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.





export const Layout = () => {
       const{dispatch} = useGlobalReducer()
    useEffect(() => {
   
    api_rick_morty.getcharacters().then(data => {
       
        dispatch({
            type: 'savecharacters',
            payload: data
        })
        console.log("3. dispatch ejecutado")
    })
}, [])
       
    return (
        <ScrollToTop>
            <Navbar />
                <Outlet />
            <Footer />
        </ScrollToTop>
    )
}