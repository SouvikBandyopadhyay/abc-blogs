import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch"

const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog , error , isPending }=useFetch("https://my-json-server.typicode.com/SouvikBandyopadhyay/JSON_FOR_REACT/blogs/"+id);
    const history=useHistory();
    const handleDelete = ()=>{
        fetch("https://my-json-server.typicode.com/SouvikBandyopadhyay/JSON_FOR_REACT/blogs/"+id,{
            method: "DELETE"
        }).then(() => history.push("/"))
    }

    return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { blog &&
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>
                        <p>{ blog.body }</p>
                    </div>
                    <button onClick={handleDelete}>delete</button>
                </article>
            }
        </div>
     );
}
 
export default BlogDetails;