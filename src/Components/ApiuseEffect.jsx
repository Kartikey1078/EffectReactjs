import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ApiuseEffect.css'; 


function ApiuseEffect() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    let [loading,setLoading] = useState(true)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                setPosts(res.data);
                setLoading(false)
            })
            .catch(err => {
                    setError(err);
                    setLoading(false)
            });
    }, []);

    return (
        <div className="api-container">
            
            <h3 style={{paddingtop: '20px'}} className='h3'>Data Fetch Using Api</h3>

            {
            loading ? (
                <p>Loadin...</p>
            )
             :error && <p className="error-message">Error fetching data: {error.message}</p>}
            <ul className="post-list">
                {posts.map(post => (
                    <li key={post.id} className="post-item">{post.title}</li>
                ))
                
            }
            </ul>
        </div>
    );
}

export default ApiuseEffect;
