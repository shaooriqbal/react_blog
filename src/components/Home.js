import { Component, useState ,useEffect} from "react";
import BlogList from "./BlogList";
const Home = () => {
 const [itemList,changeItemList] =  useState( [
    {
      id: 1,
      title: 'The Art of Storytelling',
      description: 'Unlock the power of storytelling and captivate your audience.',
      author: 'John'
    },
    {
      id: 2,
      title: 'The Science of Happiness',
      description: 'Discover the secrets to leading a happier and more fulfilling life.',
      author: 'Jane Smith'
    },
    {
      id: 3,
      title: 'Exploring the Cosmos',
      description: 'Embark on a fascinating journey through the wonders of the universe.',
      author: 'David Johnson'
    },
    {
      id: 4,
      title: 'Mastering Productivity',
      description: 'Learn effective techniques to maximize your productivity and achieve success.',
      author: 'John'
    },
    {
      id: 5,
      title: 'The Art of Mindfulness',
      description: 'Find inner peace and cultivate mindfulness in your daily life.',
      author: 'Michael Wilson'
    },
 ]);   
  const handelDel = (id) => {
    const filtered = itemList.filter((item) => item.id !== id);  
    changeItemList(filtered);
  }
  useEffect(() => { 
    console.log('Effected');
  },[itemList]);
    return (
        <div className="home">
        <BlogList blogs={ itemList} title ='Blog Post' handleDel={handelDel}></BlogList>
      <BlogList blogs={itemList.filter((item)=> item.author === 'John' )} title = 'Blogs by John' handleDel={handelDel}></BlogList>  
      </div>
      );
}
 
export default Home;
