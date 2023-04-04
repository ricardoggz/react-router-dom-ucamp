import { Routes, Route } from "react-router-dom"
import { Home } from "../views/Home"
import { About } from "../views/About"
import { Projects } from "../views/Projects"

//Routes: envuele todas las rutas
//Route: define una ruta mediante la prop path
export const AppRoutes = ()=>{
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/projects' element={<Projects />}/>
        </Routes>
    )
}