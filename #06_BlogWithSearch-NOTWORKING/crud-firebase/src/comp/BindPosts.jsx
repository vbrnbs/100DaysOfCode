import { useState, useEffect } from 'react';
import { db } from '../firebase-config';
 import { collection, getDocs}from "firebase/firestore";
import { Post } from './Post';

const GetPost = () => {
     
  const [post, setPost] = useState([]);
  const postCollectionRef = collection(db, 'posts');

  const [query, useQuery] = useState("");

  const keys = ["title", "text"];

  useEffect(() => {

    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      // console.log(data)
      setPost(data.docs.map((doc) => (
        {...doc.data(), id: doc.id}
      )));
      return {data};
    }

    getPosts();
  }, []);

  const search = (data) => {
    return data.filter(item => 
      keys.some((key) => item[key].toLowerCase().includes(query))
    )
  }
  console.log(post)


  return (
    <div className="App">
          <div>
            <input type="text" placeholder='Search...' className='search' onChange={e => useQuery(e.target.value)} />
          </div>
          <Post data={search(post)}/>
    </div>
  );
}

export default GetPost;