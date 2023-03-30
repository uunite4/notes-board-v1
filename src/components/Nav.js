import React from 'react'

export default function Nav(props) {
	const miniNotes = props.notes.map((note) => {
		return (
			<div key={note.id} className='mini-note'>
				<p>{note.name}</p>
				<span
					onClick={() => props.deleteNote(note.id)}
					className='material-symbols-outlined'
				>
					delete
				</span>
			</div>
		)
	})

	return (
		<nav>
			<h1>Notes Board</h1>
			<div className='notes-list'>
				<h2>List of notes:</h2>
				{miniNotes}
				<div className='mini-note' onClick={props.add}>
					<p>ADD NOTE</p>
					<span class='material-symbols-outlined'>add</span>
				</div>
			</div>
		</nav>
	)
}
