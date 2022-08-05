import React from 'react'

const NoteItem = ({note}) => {
  return (
    <div className='bg-gray-100 p-2 rounded-md mt-2'>
        <p>
           <span className='font-bold'>Task:</span>  {note.text}
        </p>
        <p className='text-gray-600 mt-2'>
            {new Date(note.createdAt).toLocaleString()}
        </p>
    </div>
  )
}

export default NoteItem