import React from 'react'

const Feed = ({ follower }) => {
    const { author, content } = follower;

    return (
        <div>
            <h4>@{author}</h4>
            <hr></hr>
            <p>{content}</p>
        </div>
    )
}

export default Feed
