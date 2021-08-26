`use strict`;

import React from 'react';
import PropTypes from 'prop-types';
import PhotoPostDisplay from '../components/PhotoPostDisplay.js';
import PhotoPostAdd from '../components/PhotoPostAdd.js';
import '../styles/postList.css';

export default function PhotosPostsList({photoPost, addPostPhoto}){
	// console.log(`It is the component PhotosPostsList`);
	// console.log(photoPost);
	// console.log(addPostPhoto);
	
	const listOfPhotosPosts = photoPost.map( (obj) => {
		let keysContents = ``;
		for (const key in obj) keysContents += obj[key];
		if (keysContents !== ``){
			const {
				id, 
				urlsSmall, 
				alt_description, 
				userName, 
				userLinksHtml, 
				created_at, 
				likes
			} = obj;
			const postOfPhoto = { 
				urlsSmall,
				alt_description,
				userName,
				userLinksHtml,
				created_at,
				likes
			};
			return(
				<PhotoPostDisplay
					key={id}
					postOfPhoto={postOfPhoto}
				/>
			)
		}
	})
	return(
		<div>
			<div className='post_list_container'>
				{listOfPhotosPosts}
			</div>
			<PhotoPostAdd
				addPostPhoto={addPostPhoto}
			/>
		</div>
	)
}

PhotosPostsList.propTypes = {
	photoPost: PropTypes.array.isRequired,
	addPostPhoto: PropTypes.func.isRequired
}