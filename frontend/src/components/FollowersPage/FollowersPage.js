
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function FollowersPage() {
    const { username, followers } = useSelector(state => state.user);

    return (
        <div className="container">
            <h2>Followers of {username}</h2>
            <ul>
                {followers.map(follower => (
                    <li key={follower._id}>
                        <Link to={`/repositories/${follower.username}`}>{follower.username}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FollowersPage;
