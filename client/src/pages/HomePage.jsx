import React, { useState, useEffect} from 'react'
import Feed from '../components/Feed'
import { userData } from '../data/data'
import UserAvatar from '../assets/UserAvatar.png'

const HomePage = () => {
    const [ data, setData ] = useState()

    useEffect(() => {
        setData(userData())
    },[])
    
    return (
        <div className="home-page">
            {
                data?.map((userData,index) => (
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

