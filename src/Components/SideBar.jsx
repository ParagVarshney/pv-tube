import React from 'react'
import { useSelector } from 'react-redux'
import store from '../utils/store'
import { Link } from 'react-router-dom';

const SideBar = () => {
    const isMenuOpen=useSelector(store=>store.app.isToggleMenu);
    if(!isMenuOpen) return null;
  return (
    <div className='p-5 shadow-lg w-60 px-10  '>
        <Link to={"/"}><h1 className='py-1'>Home</h1></Link>
        <h1 className='py-1'>Shorts</h1>
      <ul>
        <li className='py-1'>Music</li>
        <li className='py-1'>Sports</li>
        <li className='py-1'>Gaming</li>
        <li className='py-1'>Movies</li>
      </ul>
      <ul>
        <li className='py-1'>History</li>
        <li className='py-1'>Playlists</li>
        <li className='py-1'>Your viedos</li>
        <li className='py-1'>Watch later</li>
        <li className='py-1'>Liked viedos</li>
        <li className='py-1'>Your clips</li>
      </ul>
        <h1 className='font-bold py-1 -ml-4'>Subscriptions</h1>
    </div>
  )
}

export default SideBar
