import { Link } from "react-router-dom";

const BlogList = ({ blogs , title}) => {
    return (<div className="blog-list">
        <h1 className="blog-title">{ title}</h1>
        {blogs.map((item) => (
             <Link to={`/blog/${item.id}`}>
                <div className="item-preview" key={item.id}>
                    <h1 className="title">{ item.title}</h1>
                    <p>{item.description}</p>
                 <p>Written By <b>{item.author}</b></p>
                 
                </div>
                </Link>
            ))}
    </div>
);
}
 
export default BlogList;