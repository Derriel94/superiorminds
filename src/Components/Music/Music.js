import React from 'react';

const Music = () => {


	return(
		<div className="home music">
		<h1 className="musicTitle"> Drogo Wept At The End of The Earth</h1>
			<iframe 
			width="750px" 
			height="400px" 
			src="https://www.youtube.com/embed/jmO790wl-s8" 
			title="YouTube video player" 
			frameBorder="0" 
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
			allowFullScreen>
			</iframe>
			<h1><a href="https://www.youtube.com/channel/UCBHFh0ZVLkxTvwoYW3hLZ9Q"
			target="_blank" 
			rel="noreferrer"
			id="fiverLink">Click Here For More!</a></h1>
		</div>
		);
}
export default Music;
