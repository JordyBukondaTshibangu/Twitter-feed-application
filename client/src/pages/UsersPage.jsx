import React, { useState, useEffect} from 'react'
import { users } from '../data/data'
import UserAvatar from '../assets/UserAvatar.png'

const UsersPage = () => {
    const [ data, setData ] = useState();

    useEffect(() => {
        setData(users());
    },[])
    
    return (
        <div className="user-page">
            {
                data?.map((userData,index) => (
                    <div className="user-info" key={index}>
                        <div className="user">
                            <div className="img-container">
                                <img src={UserAvatar} alt="/"/>
                            </div>
                            <h3>{ userData.name }</h3>
                        </div>
                        <div className="followers">
                            {
                                userData.followers?.map((follower, id) => (
                                    <ul key={id}>
                                        <li className="user-follower">
                                            {follower}
                                        </li>
                                    </ul>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default UsersPage
