import NavBar from "../components/NavBar";
import { useRouteError } from "react-router-dom";
function ErrorPage(){
    return(
        <>
        <NavBar />
        <h1>Oops! Looks like something went wrong.</h1>
        </>
    )
}

export default ErrorPage