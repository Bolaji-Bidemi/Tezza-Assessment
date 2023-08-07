import React from 'react'
import "../../components/sidebar/Sidebar.css"
import logo from '../../assets/tezza.jpeg'
import '../../components/sidebar/Sidebar.css'
import { sideData } from '../../data'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../../components/sidebar/Sidebar'
import '../login/Login.css'

const SideBar = ({open, setOpen}) => {
  const navigate = useNavigate()
  return (
    <div className="sidebar">
      <div className="logoCase">  <img src={logo} className="logo" alt="logo" /> </div>
        {
            sideData.map((item, index) => (
                <Sidebar icon={item.icon} tag={item.tag} key={index} url={item.url} open={open} setOpen={setOpen}/>
            ))
        }
        <button className="btn" onClick={()=> navigate('/login')}>Logout</button>
    </div>
  )
}

export default SideBar