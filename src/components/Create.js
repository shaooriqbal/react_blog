import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Create = () => {

    const [title, setTitle] = useState('');
    const [description, setBody] = useState('');
    const [author, setAuthor] = useState('John');
    const [loading, setLoading] = useState(false);
    const history = useNavigate();
    const handleSubmit = (e) => { 
        e.preventDefault();
        const blog = { title,  description, author };
        setLoading(true);
        fetch('http://localhost:8000/blogs/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        }).then(() => { 
            setLoading(false);
            console.log('new blog added' + blog);
            history('/');
            
        })
    }
    
    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type = 'text' required value={title} onChange={(e)=> setTitle(e.target.value)}></input>
                <label>Body:</label>
                <textarea   required value={description} onChange={(e)=> setBody(e.target.value)}></textarea>
                <label> Author: </label>
                <select
                    value={author}
                    onChange={(e)=> setAuthor(e.target.value)}
                ><option value='John'>John</option><option value='Jane'>Jane</option>
                <option value = "David">David</option>
                </select>
                {
                    !loading?
                    <button > Save blog</button>:<button > Adding blog...</button>}
        </form>
        </div>
     );
}
 
export default Create;