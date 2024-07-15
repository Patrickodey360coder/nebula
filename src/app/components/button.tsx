"use client";
import React from 'react'

type SubmitButtonProps = {
  isSubmitting: boolean
};

const SubmitButton: React.FC<SubmitButtonProps> = ({isSubmitting}) => {
  return (
    <button
    disabled={isSubmitting}
    type="submit"
    className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      { isSubmitting ? 
      
        <div className='animate-spin h-5 w-5' >
          {/* ... */}
        </div>  : "Let's talk" }
    </button>
  )
}

export default SubmitButton;