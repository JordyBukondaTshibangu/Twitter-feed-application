import React from 'react'

const Feed = ({ follower }) => {
    const { author, content } = follower;

    return (
        <div className="follower-tweet">
            <h4>@{author}</h4>
            <p>{content}</p>
        </div>
    )
}

export default Feed
