import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Loader from '../components/Loader'
import UserAvatar from '../assets/UserAvatar.png'

const UsersPage = () => {
    const [ userDataCollection, setData ] = useState();
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        async function fetchData(){
            let response = await axios.get('http://localhost:5000/twitter-app/users')
            let { data : { users} } = response
            setData(users)
            setLoading(false)
        }
        fetchData()
    },[])
    
    return (
        <div className="user-page">
            {
                loading ? <Loader /> : 
                userDataCollection?.map((userData,index) => (
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
