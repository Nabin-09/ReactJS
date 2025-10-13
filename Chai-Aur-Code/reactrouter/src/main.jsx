import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {ReactProvider , createBrowserRouter} from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'

const router = createBrowserRouter([
    {
        path : '/',
        element : <Layout/>,
        children : [{
            path : "",
            element : <Home/>
        },{
             path : "about",
             element : <About/>
        }]

    }
])

createRoot(document.getElementById('root')).render(
    <ReactProvider router = {router }/>
)
