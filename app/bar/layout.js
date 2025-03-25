import React from 'react'

const BarLayout = ({children}) => {
  return (
    <div>
       <div className='hero bg-base-200'>
        <div className="hero-content flex-col leg:flex-row"></div>
            <div>
                <h1 className='text-5xl font-bold'>Welcome to our Bar</h1>
                <p className='py-6'>Feel free to order here</p>
                <button className='btn btn-primary'>Let's get some drinks</button>
            </div>

       </div>
        {children}
        
        </div>
  )
}

export default BarLayout