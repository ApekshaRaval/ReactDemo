// import React, { useState, UseEffect, useEffect } from 'react'
// import axios from 'axios'

// const DataFetching = () => {
//     const [posts, setPosts] = useState([])
//     
//     useEffect(() => {
//         axios.get(`https://jsonplaceholder.typicode.com/posts`)
//             .then(res => {
//                 console.log(res)
//                 setPost(res.data)
//             })
//             .catch(err => {
//                 console.log(err)
//             })
//     },[])

//     return (
//         <div>
// 
//             <ul>
//                 {
//                     post.map(post =>
//                         (<li key={post.id}>{post.title}</li>)
//                     )
//                 }
//             </ul>
//         </div>
//     )
// }

// export default DataFetching

import React, { useState, UseEffect, useEffect } from 'react'
import axios from 'axios'

const DataFetching = () => {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idBtnClick, setIdBtnClick] = useState(1)
    
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idBtnClick}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [idBtnClick])


    const handleClick = () => {
        setIdBtnClick(id)
    }

    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button type="button" onClick={handleClick}>Fetch Post</button>
            <h1>{post.title}</h1>

        </div>
    )
}

export default DataFetching
