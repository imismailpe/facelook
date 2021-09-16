import React from 'react';

const ImageLinkForm =({inputChange,onbuttonClick,concepts, isloading})=>{
	return(
<div className="f4">
	<h6 className='white'>Results:</h6>
	<p className="white resultText">{isloading? 'Loading..' : concepts ? `its probably ${concepts}` : ''}</p>
	<div className="pa2">
		<input placeholder='paste an image url' type="text" className="f4 pa2 w-70" onChange={inputChange}/>
		<button className="w-10 grow f4 link ph3 pv2 dib white bg-dark-pink" onClick={onbuttonClick}>go</button>
	</div>
</div>
		);
}
export default ImageLinkForm;