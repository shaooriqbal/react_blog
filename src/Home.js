const Home = () => {

    const handleClick = (e) => { 
        console.log('fff'+e.target);
    };
    
    const handleClickName = (name) => { 
        console.log('hello '+name);
    };
    return (
        <div className="home"><h1>Home Page</h1>
        <button onClick={handleClick}>Log me</button>
       <button onClick={()=>handleClickName('shah')}></button>
        </div>
      );
}
 
export default Home;
