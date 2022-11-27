import React, {useState, useRef, useEffect} from 'react';
import {HiMenu} from 'react-icons/hi';
import {AiFillCloseCircle} from 'react-icons/ai';
import { Link, Route, Routes} from 'react-router-dom';
import {UserProfile, Sidebar} from '../components';
import { client } from '../client';
import Pins from './Pins';
import logo from '../assets/logo.png'

const Home = () => {
  return (
    <div>Home</div>
  )
}

export default Home