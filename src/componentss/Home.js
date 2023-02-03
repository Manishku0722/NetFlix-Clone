import { Link, useNavigate } from "react-router-dom";

function Home(){
    const navigate = useNavigate();
    const navToPage=(url)=>{
        navigate(url)
    }
    return(
        <>
            <h2>Home</h2>
            <p>This a home page of your awesome website</p>
            <p>And we are using React Router in this application</p>
            <Link to="/about">Go to About Page</Link>
            <br/><br/><br/>
            <button onClick={()=>navToPage('/about')}>Go to About</button>
            <br/><br/>
            <button onClick={()=>navToPage('/filter')}>Go to Filter</button>
        </>
    )
}

export default Home;