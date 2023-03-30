import React from 'react'
import Draggable, { DraggableCore } from 'react-draggable'

export default function Note(props) {
	return (
		<Draggable bounds='parent'>
			<div className='note'>
				<input
					type='text'
					name='name'
					value={props.name}
					className='note-name note-input'
					placeholder='Note Name'
					onChange={(e) => {
						props.onChange(e, props.id)
					}}
				/>
				<textarea
					name='value'
					value={props.value}
					className='note-value note-input'
					placeholder='Note'
					onChange={(e) => {
						props.onChange(e, props.id)
					}}
				/>
			</div>
		</Draggable>
	)
}
