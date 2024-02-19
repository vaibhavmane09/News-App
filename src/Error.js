import React from 'react'

export default function Error() {
  return (
	<div>
	  <div className="container d-flex align-items-center justify-content-center flex-column text-danger" style={{height:"100vh",width:"100%",background:"linear-gradient(60deg,red green)"}}>
		<h1>ERROR 404</h1>
		<h3>'Web page not found'</h3>
	  </div>
	</div>
  )
}
