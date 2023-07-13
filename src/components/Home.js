import { useState } from "react";

const Home = () => {
 const [itemList,changeItemList] =  useState( [
    {
      id: 1,
      title: 'The Art of Storytelling',
      description: 'Unlock the power of storytelling and captivate your audience.',
      author: 'John Doe'
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
      author: 'Emily Brown'
    },
    {
      id: 5,
      title: 'The Art of Mindfulness',
      description: 'Find inner peace and cultivate mindfulness in your daily life.',
      author: 'Michael Wilson'
    },
  ]);   
    return (
        <div className="home">
            {itemList.map((item) => (
                <div className="item-preview" key={item.id}>
                    <h1 className="title">{ item.title}</h1>
                    <p>{item.description}</p>
                    <p>Written By <b>{ item.author}</b></p>
                </div>
            ))}
        </div>
      );
}
 
export default Home;
