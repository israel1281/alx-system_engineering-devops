import "./home.css"
import React, { useEffect } from 'react'
import Feed from '../components/home/feed'
import Posts from '../components/home/Posts'
import LeftSideBar from '../components/home/LeftSideBar'
import RightSideBar from '../components/home/RightSideBar'
import { useSelector } from 'react-redux'
import LoadIcon from '../images/loading.gif'


let scroll = 0;

const Home = () => {
    const { homePosts } = useSelector(state => state)

    window.addEventListener('scroll', () => {
        if(window.location.pathname === '/'){
            scroll = window.pageYOffset
            return scroll;
        }
    })

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({top: scroll, behavior: 'smooth'})
        }, 100)
    },[])

    return (
        <div className="home">
                <LeftSideBar />
                <Feed />
                <RightSideBar />
        </div>
    )
}

export default Home
