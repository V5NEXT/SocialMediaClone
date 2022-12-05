import React from 'react'
import { urlFor } from '../client'

const Pin = () => {
  return (
    <div>
        <img className='rounded-lg w-full' alt='user-post' src={urlFor(image).width(250).url}/>
    </div>
  )
}

export default Pin