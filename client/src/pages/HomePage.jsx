import React, { useState, useEffect} from 'react'
import Feed from '../components/Feed'
import { userData } from '../data';

const HomePage = () => {
    const [ data, setData ] = useState();

    useEffect(() => {
        setData(userData());
    },[])
    
    return (
        <div className="home-page">
            <div className="home-body">
                {
                    data?.map((userData,index) => (
                        <div className="user-content" key={index}>
                            <br></br>
                            <div className="user">
                                <h3>{ userData.name }</h3>
                            </div>
                            <br></br>
                            <div className="followers">
                                {
                                    userData.followers?.map((follower, id) => <Feed key={id} follower={follower} />)
                                }
                                <br></br>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default HomePage

