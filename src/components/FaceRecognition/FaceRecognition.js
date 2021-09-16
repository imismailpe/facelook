import React from 'react';

const FaceRecognition = ({imgurl})=>{
	return(
		<div className="center ma2 pa2 br2 white">
			<img src={imgurl} width="250px" height="auto" alt="input of FaceRecognition"/>
		</div>
		);
}
export default FaceRecognition;