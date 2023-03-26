import React from 'react'

import Draggable, { DraggableCore } from 'react-draggable'

export default function Test() {
	return (
		<>
			<div className='nav center-text'>NAVBAR</div>
			<div className='cont center-text'>
				WHITEBOARD
				<Draggable bounds='parent'>
					<div className='draggable center-text'>NOTE 1</div>
				</Draggable>
				<Draggable bounds='parent'>
					<div className='draggable center-text'>NOTE 2</div>
				</Draggable>
			</div>
		</>
	)
}
