import React, { useState } from "react";
import {BsImage} from 'react-icons/bs'

function ProfilePictureInput({onImageUpdate}) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target.result);
        onImageUpdate(selectedImage)
      };
      reader.readAsDataURL(file);
    }
  };

  const handleContainerClick = () => {
    // Trigger the hidden file input when the container is clicked
    document.getElementById("fileInput").click();
  };

  return (
    <div className="flex flex-col items-center justify-center w-24 h-24 rounded-full bg-white shadow-md mb-5 text-slate-700 cursor-pointer" onClick={handleContainerClick}>
      {selectedImage ? (
        <img src={selectedImage} alt="Selected" className="circular-image" />
      ) : <BsImage className="text-xl"/>}
      <input
        type="file"
        accept="image/*"
        id="fileInput"
        onChange={handleImageChange}
        style={{ display: "none" }}
      />
    </div>
  );
}

export default ProfilePictureInput;
