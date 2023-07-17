const BlogList = ({ blogs , title}) => {
    return (<div className="blog-list">
        <h1 className="blog-title">{ title}</h1>
         {  blogs.map((item) => (
                <div className="item-preview" key={item.id}>
                    <h1 className="title">{ item.title}</h1>
                    <p>{item.description}</p>
                 <p>Written By <b>{item.author}</b></p>
                 <button className="del-button" onClick={()=>console.log('Will del')}>Delete Blog</button>
                </div>
            ))}
    </div>
);
}
 
export default BlogList;