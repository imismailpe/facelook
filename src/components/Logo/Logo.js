import React from 'react';
import Tilt from 'react-tilt';

const Logo =()=>{
	return(
<div className="ma2 mt1">
	<Tilt className="Tilt br2 shadow-2 ma2" options={{ max : 25 }} style={{ height: 100, width: 100 }} >
 <div className="Tilt-inner f1"><span role="img" aria-label="face"> 👽 </span></div>
</Tilt>
</div>
		);
}

export default Logo;