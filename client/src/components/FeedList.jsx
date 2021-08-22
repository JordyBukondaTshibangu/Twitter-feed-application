import React from 'react'
import Feed from './Feed';

const FeedList = ({ followers }) => {
    
    return (
       <>
        {
            followers.map((follower,index) => <Feed key={index} follower={follower} />)
        }
       </>
    )
}

export default FeedList
