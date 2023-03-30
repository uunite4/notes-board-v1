import React, { useState, createContext } from 'react'
import { NotesContext } from './context'
import { nanoid } from 'nanoid'

import Testing from './components/Test'
import Nav from './components/Nav'
import Whiteboard from './components/Whiteboard'

export default function App() {
	const [notes, setNotes] = useState(CreateDefaultNotes) // all notes

	function CreateDefaultNotes() {
		const defNotesNumber = 5
		let newNotes = []
		for (let i = 0; i < defNotesNumber; i++) {
			newNotes.push(newNote(i))
		}
		return newNotes
	}

	function newNote(i) {
		return { name: `note ${i + 1}`, value: `new note ${i + 1}`, id: nanoid() }
	}

	function deleteNote(id) {
		setNotes(notes.filter((note) => note.id != id))
	}

	function addNewNote() {
		setNotes([...notes, newNote(notes.length)])
	}
	console.log(notes)

	function onChangeNote(e, id) {
		const { name, value } = e.target
		setNotes(
			notes.map((note) => {
				if (note.id == id) {
					return { ...note, [name]: value }
				} else {
					return { ...note }
				}
			})
		)
	}

	return (
		<div className='all'>
			<Nav add={addNewNote} notes={notes} deleteNote={deleteNote} />
			<Whiteboard notes={notes} onchange={onChangeNote} />
		</div>
	)
}
