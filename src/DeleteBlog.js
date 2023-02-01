import React from 'react';
import { deleteDoc, doc } from 'firebase/firestore';
import { db, storage } from './firebaseConfig.js';
import { deleteObject, ref } from 'firebase/storage';
import { toast }from 'react-toastify';

export default function DeleteBlog( {id, imageUrl} ) {
	const handleDelete =async()=> {
		try {
		 await deleteDoc(doc(db, "blogs", id));
		 toast("Article Deleted Successfuly", {type: "success"});
		 const storageRef = ref(storage, imageUrl);
		 await deleteObject(storageRef)
		} catch (error) {
			console.log(error)
			toast("Error Deleting Article", {type: "error"});
		}
		
	};

	return (
		<div>
			<button className='dangerButton' onClick={handleDelete}>Delete</button>
		</div>
	)
}