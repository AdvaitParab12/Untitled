import { Link } from "react-router-dom"
function Header(){
    return(
        <header className="mb-8 flex items-center gap-2">
            <Link to={"/"}><img src="favicon.png" alt="logo" className="w-10 h-10 rounded-full" /></Link>
            <p className="font-semibold">Untitled Contact Form </p>
        </header>
    )
}   

export default Header