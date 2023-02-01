 import React, { useState } from 'react'
import { toast }from 'react-toastify';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import Blogs from './Blogs/Blogs.js';
import { storage, db } from './../firebaseConfig.js';

const Editor = () => {

		const [formData, setFormData] = useState({
		title: "",
		description: "",
		image: "",
		createdAt: Timestamp.now().toDate(),
		likes: 0,
		comments: [],
	});
	console.log(formData.createdAt)

	const [progress, setProgress] = useState(0);

	const handleChange =(e)=> {
		setFormData({...formData, [e.target.name]: e.target.value });
	};

	const handleImageChange =(e)=> {
		setFormData({...formData, image: e.target.files[0] });
	};

	const handlePublish =() =>  {
		if (!formData.title || !formData.description || !formData.image) {
			alert('Please Fill The Tank!');
			return;
		}

		const storageRef = ref(storage, `/images/${Date.now()}${formData.image.name}`);
		const uploadImage = uploadBytesResumable(storageRef, formData.image);

		uploadImage.on("state_changed", (snapshot)=> {
				const progressPercent = Math.round((snapshot.bytesTransferred/ snapshot.totalBytes) * 100);
				setProgress(progressPercent);
		}, (err)=> {
				console.log(err);
		}, ()=> {
			setFormData({
					title: "",
					description: "",
					image: "",

				});

		 getDownloadURL(uploadImage.snapshot.ref)
				.then((url) => {
          var articleRef = collection(db, "blogs");
          console.log('breaks here')
          addDoc(articleRef, 
          {
            title: formData.title,
            description: formData.description,
            imageUrl: url,
            createdAt: Timestamp.now().toDate(),
            likes: formData.likes,
            comments: formData.comments,
          }

          )
            .then(() => {
              toast("Article added successfully", {type: "success"});
              setProgress(0);
            })
            .catch((err) => {
              toast("Error adding article", {type: "error"});
            });
        });
      }
    );
	};
	
	return (
		<div className="editor">
			<div>
				<p style={{fontWeight: "bolder"}}> Create Blog </p>
			<div>
				<p>Title</p>
				<input type="text" name="title" className="" onChange={(e)=>handleChange(e)} value={formData.title}/>
			</div>
			<div>
			<p>Description</p>
			<textarea name="description" className="" onChange={(e)=>handleChange(e)} value={formData.description}/>
			</div>
			<div>
			<p>Image</p>
			<input ty pe="file" name="image" accept="image/*" onChange={(e)=>handleImageChange(e)}/>
			{
				progress === 0 ? null : (
					<div style={{backgroundColor:"blue", width: `${progress} %` }}>
						{`uploading image ${progress}%`}
					</div>
					)
			}
			</div>
			<div>
				<button onClick={handlePublish}>publish</button>
			</div>
			</div>
			<div className="createArticleList">
				<Blogs />
			</div>
		</div>
	)
}

export default Editor;