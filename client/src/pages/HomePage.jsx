import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Feed from '../components/Feed'
import { usersAndFeed } from '../utils/data'
import UserAvatar from '../assets/UserAvatar.png'

const HomePage = () => {
    const [ dataFeed, setData ] = useState()

    useEffect( () => {
        async function fetchData(){
            let responseOne = await axios.get('http://localhost:5000/twitter-app/users')
            let { data : { users} } = responseOne

            let responseTwo = await axios.get('http://localhost:5000/twitter-app/feeds')
            let { data : { tweets} } = responseTwo
            let usersFeed = usersAndFeed(users, tweets)
            setData(usersFeed)
        }
        fetchData()
        
    },[])
    
    return (
        <div className="home-page">
            {
                dataFeed?.map((userData,index) => (
                    <div className="user-content" key={index}>
                        <div className="user">
                            <img src={UserAvatar} alt="/"/>
                            <h3>{ userData.name }</h3>
                        </div>
                        <div className="followers">
                            {
                                userData.followers?.map((follower, id) => <Feed key={id} follower={follower} />)
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default HomePage

