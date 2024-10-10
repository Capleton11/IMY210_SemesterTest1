import React from 'react';
import Post from '../components/post';
import Home from './Home';
//u22554875 Capleton Chapfika
const postsArr = [
  {
    title: "Growing Your First Vegetable Garden",
    author: "Emma Stone",
    description: "A beginner's guide to planting and harvesting your own vegetables.",
  },
  {
    title: "Indoor Plant Care Tips",
    author: "James Miller",
    description: "How to keep your indoor plants thriving with minimal effort.",
  },
  {
    title: "Composting for Beginners",
    author: "Sarah Brown",
    description: "Learn how to create nutrient-rich compost for your garden.",
  },
  {
    title: "Creating a Pollinator-Friendly Garden",
    author: "Michael Green",
    description: "Tips on attracting bees, butterflies, and other pollinators to your garden.",
  },
  {
    title: "Seasonal Flower Gardening",
    author: "Linda Johnson",
    description: "A guide to planting flowers that bloom beautifully throughout the year.",
  },
];

class Posts extends React.Component{
    render(){
        return(
            <div>
                <h1>Hello Posts Page</h1>
          
      {postsArr.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </div>
        );
    }
}

export default Posts;