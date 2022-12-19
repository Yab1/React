import { useState } from "react";
// import {useHistory} from 'react-router-dom'

const Create = () => {
    const[data, setData] = useState({
        title:"",
        body:"",
        author:""
    })
    const [isPending, setIsPending]= useState(false)
    // const history = useHistory()

    const handleChange = (event)=>{
        const{name,value} = event.target
        setData(prevData =>{
            return{
                ...prevData,
                [name]:value
            }
        })
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        setIsPending(true)
        fetch('http://localhost:3500/blogs',{
            method:'POST',
            headers:{"Content-Type":"applicaton/json"},
            body:JSON.stringify(data)
        })
        .then(()=>{
            console.log("new blog added")
            setIsPending(false)
            // history.go(-1)
            // history.push('/')
        })
    }

    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Blog Title</label>
                <input 
                    type="text" id="title" required
                    value={data.title}
                    onChange={handleChange}
                    name="title"  
                />

                <label htmlFor="body">Blog Body</label>
                <textarea 
                    id="body" required
                    value={data.body}
                    onChange={handleChange}
                    name="body"
                ></textarea>

                <label htmlFor="author">Blog Author</label>
                <select 
                    id="author"
                    value={data.author}
                    onChange={handleChange}
                    name="author">
                        <option value="mario">mario</option>
                        <option value="yoshi">yoshi</option>
                </select>
                    {!isPending && <button>Add Blog</button>}
                    {isPending && <button disabled>Adding Blog</button>}
            </form>
        </div>
     );
}
 
export default Create;