import ListofBlog from "./ListofBlog";
import useFetch from "./useFetch";

const Home = () => {
    
    const { data: blogs, isPending, error } = useFetch("https://my-json-server.typicode.com/SouvikBandyopadhyay/JSON_FOR_REACT/blogs");
    

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {!error && blogs && <ListofBlog blogs={blogs} title="All Blogs!" />}
            
        </div>
     );
}
 
export default Home;
