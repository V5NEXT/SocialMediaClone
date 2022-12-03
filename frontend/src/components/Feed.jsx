import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import {client} from '../client';
import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner';


const Feed = () => {
  const [loading, setLoading] = useState(false)
  const {categoryId} = useParams();
  useEffect(() => {
    setLoading(true);
    if(categoryId){

    } else{

    }
    
  }, [categoryId])
  
  if(loading) return <Spinner message="We are adding something"/>
  return (
    <div>Feed</div>
  )
}

export default Feed