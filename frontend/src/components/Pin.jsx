import React, {useState} from 'react';
import {Link, Navigate, useNavigate} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
import { MdDownloadForOfline} from 'react-icons/md';
import { AiTwotoneDelete} from 'react-icons/ai';
import { BsFillArrorUpRightCircleFill} from 'react-icons/bs';
import { urlFor, client } from '../client'

const Pin = ({pin:{postedBy, image, _id, destination}}) => {
  const [postHovered, setPostHovered] = useState(false);
  const [SavingPost, setSavingPost] = useState(false);
  const navigate = useNavigate();

  
  return (
    <div className='m-2'>

      <div 
       onMouseEnter={()=> setPostHovered(true)}
       onMouseLeave={()=> setPostHovered(false)}
       onClick={()=> Navigate(`/pin-detail/${_id}`)}
       >


      </div>





        <img className='rounded-lg w-full' alt='user-post' src={urlFor(image.asset.url).width(250).url()}/>
    </div>
  )
}

export default Pin