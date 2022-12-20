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



  return (
    <div>CreatePin</div>
  )
}

export default CreatePin