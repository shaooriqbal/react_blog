import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data, isLoading, error } = useFetch('http://localhost:8000/blogs/' + id);

    return (  
        <div className="blog-details">
            { isLoading &&  <div>Loading...</div>}
            {error && <div>{error}</div>}
        
            {data && (
                <article>
                    <h2 className="details-heading">{data.title}</h2>
                    <p className="details-auth">Written By {data.author}</p>
                    <div className="details-des">{ data.description}</div>
                </article>
            )}
         </div>

    );
}
 
export default BlogDetails;