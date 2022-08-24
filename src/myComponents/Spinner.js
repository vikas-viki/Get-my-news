import React from 'react';
import loadingSpinner from './loadingSpinner.gif'

export default function Spinner()  {
  
    return (
      <div className='text-center'>
        <img src={loadingSpinner} alt="loading" />
      </div>
    )
  
}
