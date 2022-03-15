import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom'

const Home = () => {

    return (
        < >
           <Link to={'/celsius'}><div>celsius</div></Link>
           <Link to={'/hour'}><div>hour</div></Link>
           <Link to={'/length'}><div>length</div></Link>
           <Link to={'/bytes'}><div>bytes</div></Link>
        </>
    )
}

export default Home
