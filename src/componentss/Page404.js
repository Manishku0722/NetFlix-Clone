import { Link } from "react-router-dom"

function Page404()
{
    return(
        <>
            <h1>404 Page</h1>
            <p>This page is not present</p>
            <h2><Link to="/">Go to Home Page</Link></h2>
        </>
    )
}

export default Page404