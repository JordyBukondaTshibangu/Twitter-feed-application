import React from 'react'

const Feed = ({ follower }) => {
    const { author, content } = follower;

    return (
        <div>
            <hr></hr>
            <h4>@{author}</h4>
            <p>{content}</p>
            <hr></hr>
            <br></br>
        </div>
    )
}

export default Feed
