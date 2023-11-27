import React from 'react'
import Layout from '../components/Layout/Layout'
import {Link} from 'react-router-dom'
import Banner from '../images/Popular-Indian-Food-Dishes.jpg.webp'
import "../styles/HomeStyles.css";
const Home = () => {
  return (
    <Layout>
        <div className="home" style={{backgroundImage:`url(${Banner})`}}>
          <div className="headerContainer">
            <h1>Restaurant Website</h1>
            <p>Best food served</p>
            <Link to="/menu">
            <button>
              Order Now
            </button>
            </Link>
          </div>
        </div>
    </Layout>
  )
}

export default Home
