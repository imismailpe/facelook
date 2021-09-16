import React from 'react';

const ImageLinkForm =({inputChange,onbuttonClick,concepts})=>{
	return(
<div className="f4">
	<p className="white">{concepts}</p>
	<div className="pa2">
		<input type="text" className="f4 pa2 w-70" onChange={inputChange}/>
		<button className="w-10 grow f4 link ph3 pv2 dib white bg-dark-pink" onClick={onbuttonClick}>go</button>
	</div>
</div>
		);
}
export default ImageLinkForm;