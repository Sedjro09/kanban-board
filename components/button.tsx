import React from 'react'

export function Button({buttonClassName, text, onClick} : {
    buttonClassName: string;
    text: string;
    onClick: ()=>void;
}) {
  return <>
  
      
    <button 
        className={buttonClassName}
        onClick={onClick}
    >
        {text}
    </button>

  </>
}
