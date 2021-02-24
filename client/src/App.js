import {BrowserRouter as Router} from "react-router-dom"
import useRoutes from "./routes"
import useAuth from "./hooks/auth.hook"
import AuthContext from "./context/AuthContext"
import Navbar from "./conponents/Navbar"
import 'materialize-css'
import Loader from "./conponents/Loader";


function App() {
    const {token, login, logout, userId, ready} = useAuth()
    const isAuthenticated = !!token
    const routes = useRoutes(isAuthenticated)

    if(!ready) {
        return (
            <Loader />
        )
    }

    return (
        <AuthContext.Provider value={{
            token, login, logout, userId, isAuthenticated
        }}>
        <Router>
            {isAuthenticated && <Navbar />}
            <div className='container'>
                {routes}
            </div>
        </Router>
        </AuthContext.Provider>
    );
}

export default App
