import React from 'react';


const VoiceOver = () => {


	return(
		<div className="home music">
		<h1 className="musicTitle">NagaChamba VoiceOver</h1>
			<iframe 
			width="750" 
			height="400" 
			src="https://www.youtube.com/embed/7IvgZqGk2rA" 
			title="YouTube video player" 
			frameBorder="0" 
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
			allowFullScreen></iframe>
			<h1><a href="https://www.youtube.com/channel/UCoUf_sxx9ruw6QiqDj65mvg"
			target="_blank" 
			rel="noreferrer"
			id="fiverLink">Click Here For More!</a></h1>
		</div>
		);
}
export default VoiceOver;
