import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
    const [title, setTitle]=useState('');
    const [author, setAuthor]=useState('Rock');
    const [body, setBody]=useState('');
    const [isPending,setIspending]=useState(false);
    const history= useHistory();
    const handelSubmit=(e)=>{
        e.preventDefault();
        const blog = {title,body,author};

        setIspending(true);

        fetch('https://my-json-server.typicode.com/SouvikBandyopadhyay/JSON_FOR_REACT/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=> {
            console.log("new blog added"+blog)
            setIspending(false);
            history.push("/")
        })
    }
    return(
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handelSubmit}>
                <label >Blog Title:</label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}/>
                <label >Blog Body:</label>
                <textarea required value={body} onChange={(e) =>{setBody(e.target.value)}}></textarea>
                <label >Blog Author:</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Rizo">Rizo</option>
                    <option value="Rock">Rock</option>
                    <option value="Sou">Sou</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog</button>}
            </form>
            
        </div>
    )
}
export default Create;