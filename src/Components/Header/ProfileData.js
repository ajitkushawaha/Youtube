import React from 'react'

const ProfileData = ({icon, title}) => {
  return (
    <div className=''>
      <div className=' flex gap-4 mt-1 p-1 hover:bg-slate-700 rounded '>
        <span>{icon}</span>
        <span>{title}</span>
      </div>
    </div>
  )
}

export default ProfileData
