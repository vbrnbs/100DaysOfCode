import { useState } from 'react';
// import {firebase} from 'firebase/app';c
import { collection, addDoc }from "@firebase/firestore";
import { db } from '../firebase-config';
// import ImageUpload from './ImageUpload';

const AddPost = () => {

  const storage = firebase.storage();

    const [newTitle, setNewTitle] = useState("");
    const [newText, setNewText] = useState(0);
    // tags

    const postCollectionRef = collection(db, 'posts');

    const createPost = async () => {
      await addDoc(postCollectionRef, {title: newTitle, text: newText })
    };
  return (
    <div>
      <input placeholder='Title...' onChange={(event) => {
        setNewTitle(event.target.value)
       }}
      />
      <input placeholder='Text...' onChange={(event) => {
        setNewText(event.target.value)
       }}
      />
      <button onClick={createPost}>Add Blog Post</button>
    </div>
  )
}

export default AddPost