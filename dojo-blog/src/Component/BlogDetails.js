import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const{id}=useParams()
    const {data:blog, isPending, error} = useFetch(`http://localhost:3500/blogs/${id}`)

    const handleClick =()=>{
        fetch('http://localhost:3500/blogs')
    }

    return ( 
        <div className="blog-details">
            {isPending && <div>Loading ...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <h4>written by {blog.author}</h4>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;