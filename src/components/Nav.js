import React from 'react'

export default function Nav(props) {
	return (
		<nav>
			<h1>Notes Board</h1>
			<div className='notes-list'>
				<h2>List of notes:</h2>
				{props.miniNotes}
			</div>
		</nav>
	)
}
