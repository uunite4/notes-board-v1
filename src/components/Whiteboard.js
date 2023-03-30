import React from 'react'

import Note from './Note'

export default function Whiteboard(props) {
	const notesElems = props.notes.map((note) => {
		return (
			<Note
				onChange={props.onchange}
				name={note.name}
				value={note.value}
				key={note.id}
				id={note.id}
			/>
		)
	})

	return <div className='whiteboard'>{notesElems}</div>
}
