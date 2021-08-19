import React, { useState, useEffect} from 'react'
import { users } from '../data/data';

const UsersPage = () => {
    const [ data, setData ] = useState();

    useEffect(() => {
        setData(users());
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
                                    userData.followers?.map((follower, id) => <div key={id}> {follower} </div>)
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

export default UsersPage
