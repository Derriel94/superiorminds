import React, {useState} from 'react';


const Contact = () => {
	const [email, setEmail] = useState("");
	const [textArea, setTextArea] = useState("");
	const onEmailChange = (e) => {setEmail(e.target.value)};
	const handleTextAreaChange = (e) => {setTextArea(e.target.value)};


	return(
		<div className="home Contact">
			<h1 className="alilSmaller">My Rates and Request!</h1>
			<div className="topOfPage">
				<div className="blackBox">
					<h2 style={{color: "#664c19"}}>Different Packages</h2>
						<ul className="alilbigger">
							<li>5$ Per 50 Words</li>
							<li>If the s riot is past 2500 words message me for a custom order and we will negotiate pricing</li>
						</ul>
						<h2>A little about MY Audio Journey</h2>
						<p>Good day mates! I am Mad Mac creative artist. 
						I am a proud Voice Artist, Writer, Lyricist Author, 
						and Poet. The literary arts are my thing. Since 2020 
						I have narrated over 25 audiobooks for ACX and Fiverr. 
						I've done commercial promos for small businesses 
						and expanding ones. I absolutely love what I do and 
						I am proud to assist on any projects you may have. 
						Please message me if you have any questions. 
						My prices are affordable, if not I am willing to work with you! 
						Check out my gigs hear my samples. 
						Another day another opportunity loved ones.</p>
				</div>
				<div className="blackBox">
					<h1><a 
						href="https://www.fiverr.com/madmac007" 
						target="_blank" 
						rel="noreferrer"
						id="fiverLink"
						>Fiver Gigs</a></h1>
						<h2><a 
						href="https://www.fiverr.com/share/3vBNQr" 
						target="_blank" 
						rel="noreferrer"
						id="fiverLink"
						>Audiobook (ACX Standards)</a></h2>
						<h3>Get a Discount when you subscribe through fiver!</h3>
						<h4>Grab the details through the link!</h4>
							<h2><a 
						href="https://www.fiverr.com/share/3vBNQr" 
						target="_blank" 
						rel="noreferrer"
						id="fiverLink"
						>Deep Passionate Black Male Voiceover</a></h2>
						<h3>Click The Top Link To See More Gigs</h3>
				</div>
			</div>
			 <form className="contact-form" action="https://formsubmit.co/chrismacbuff35@gmail.com" method="POST">
				<label htmlFor="email-address">Enter Email</label>
              	<input onChange={onEmailChange}  value={email} name="email-address"  id="email-address" />
				<p>Leave me a message if you want to work, colab etc.</p>
				<textarea value={textArea} onChange={handleTextAreaChange} rows="10" cols="60"/>
				<button type="submit" value="submit">SendEmail</button>
			</form>
		</div>
		);
}

export default Contact;