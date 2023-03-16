import { useState, useEffect, useRef } from 'react';

const ImageUpload = (props) => {
    const [image, setImage] = useState("");
    const [previewUrl, setPreviewUrl] = useState("");
    const filePickerRef = useRef();

    useEffect(() => {
        if(!image){
          return;
        }
        const fileReader = new FileReader();
        fileReader.readAsDataURL(image);
      },[image]);
  
      function pickedHandler(event){
        let pickedFile;
        if (event.target.files && event.target.files.length === 1){
          pickedFile = event.target.files[0];
          setImage(pickedFile);
          props.setData((prev) => {
              return{...prev,image:pickedFile}
          })
        }
        return {pickedFile}
      }
  
      function pickedImageHandler() {
        filePickerRef.current.click();
      }
  return (
    <div>
        <input 
        // id={props.id}
        ref={filePickerRef}
        type="file"
        accept=".jpg, .png, .jpeg, .gif"
        onChange={pickedHandler}
      />
      <div>
        {previewUrl && <img src={ previewUrl } alt="preview" />}
        {!previewUrl &&(
          <button type="button" onClick={pickedImageHandler}>Upload</button>
        )}
      </div>
      <div>
        {previewUrl &&(
          <button type="button" onClick={pickedImageHandler}>Edit</button>
        )}
      </div>
    </div>
  )
}

export default ImageUpload