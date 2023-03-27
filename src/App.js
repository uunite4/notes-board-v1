import React, { useState, createContext } from 'react'
import Draggable, { DraggableCore } from 'react-draggable'
import { NotesContext } from './context'
import { nanoid } from 'nanoid'

import Testing from './components/Test'
import Nav from './components/Nav'

export default function App() {
	const [notes, setNotes] = useState(CreateDefaultNotes) // all notes
	const miniNotes = notes.map((note) => {
		// all mininotes shown in nav
		return (
			<div key={note.id} className='mini-note'>
				<p>{note.name}</p>
				<span
					onClick={() => deleteNote(note.id)}
					className='material-symbols-outlined'
				>
					delete
				</span>
			</div>
		)
	})

	function CreateDefaultNotes() {
		const defNotesNumber = 5
		let newNotes = []
		for (let i = 0; i < defNotesNumber; i++) {
			newNotes.push({
				name: `note ${i + 1}`,
				value: `new note ${i + 1}`,
				id: nanoid(),
			})
		}
		return newNotes
	}

	function deleteNote(id) {
		setNotes(notes.filter((note) => note.id != id))
	}

	return (
		<div className='all'>
			<Nav miniNotes={miniNotes} />
		</div>
	)
}
