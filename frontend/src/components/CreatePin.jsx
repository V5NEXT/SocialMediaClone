import React, {useState} from 'react';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import {useNavigate, userNavigate} from 'react-router-dom';

import { client } from '../client';
import { categories } from '../utils/data';
import Spinner from './Spinner';

//categories


const CreatePin = ({user}) => {
  const [title, settitle] = useState('');
  const [about, setabout] = useState('');
  const [destination, setdestination] = useState('');
  const [loading, setloading] = useState(false);
  const [fields, setfields] = useState(null);
  const [category, setcategory] = useState(null);
  const [imageAsset, setimageAsset] = useState(null);
  const [WrongImageType, setWrongImageType] = useState(null);

  const navigate = useNavigate();
  const uploadImage = (e)=>{
    const {type, name} = e.target.files[0];

    if(type === 'image/png' || type === 'image/svg' || type === 'image/jpg' || type === 'image/jpeg' || type === 'image/gif'||type === 'image/tiff'){
      setWrongImageType(false);
      setloading(true);

      client.assets
      .upload('image', e.target.files[0], {contentType : type, filename:name})
      .then((document)=>{
        setimageAsset(document)
        setloading(false)
      })
      .catch((error)=>{
        console.log('Image upload error', error);
      })
    }
    else{
      setWrongImageType(true)
    }
  }



  return (
<div className='flex flex-col justify-center items-center mt-5 lg:h-4/5'>
{fields&&(
  <p className='text-red-500 mb-5 text-xl trasition-all duration-150 ease-in'>Please Fill in all the fields</p>
)}
<div className='flex lg:flex-row flex-col justify-center items-center bg-white lg:p-5 p-3 lg:w-4/5 w-full'>
<div className='bg-secondaryColor p-3 flex flex-0.7 w-full'>
 <div className='flex justify-center items-center flex-col border-2 border-dotted border-gray-300 p-3 w-full h-420'>
  {loading && <Spinner/>}
  {WrongImageType&&(
    <p>Wrong Image Type</p>
  )}
  {!imageAsset?(
    <label>
      <div className='flex flex-col items-center justify-center h-full'>
        <div className='flex flex-col justify-center items-center'>
        <p className='font-bols text-2xl'>
          <AiOutlineCloudDownload/>
        </p>
        <p className='text-lg'>
        Click to upload
        </p>
        </div>
        <p className='mt-32 text-gray-400'>
          Use high-quality JPG, SVG, PNG, GIF less than 20MB
        </p>
      </div>
      <input
      type="file"
      name="upload-image"
      onChange={uploadImage}
      className='w-0 h-0'
      />
    </label>
  ): (
    <div className='relative h-full'>
      <img src={imageAsset?.url} alt='uploaded-pic' className='h-full w-full'/>
      <button
      type='button'
      className='absolute bottom-3 right-3 p-3 rounded-full bg-white text-xl cursor-pointer outline-none hover:shadow-md transition-all ease-in-out'
      onClick={()=>{
        setimageAsset(null)
      }}
      >
        <MdDelete/>
      </button>
    </div>
  )}
 </div>
</div>
<div className='flex flex-1 flex-col gap-6 lg:pl-5 mt-5 w-full'>
      <input 
      type='text'
      value={title}
      onChange={(e)=> settitle(e.target.value)}
      placeholder="Add your title"
      className='outline-none text-2xl sm:text-3xl font-bold border-b-2 border-gray-200 p-2'
      />
</div>
</div>
</div>
  )
}

export default CreatePin