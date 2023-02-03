import { Link } from "react-router-dom";

function About(){
    return(
        <>
        <h2>About</h2>
        <p>This a About page of your awesome website</p>
        <p>And we are using React Router in this application</p>
        <Link to="/">Go to Home Page</Link>
        </>
    )
}

export default About;