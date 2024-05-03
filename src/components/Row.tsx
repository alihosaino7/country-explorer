import React from 'react'

interface Props {
   label: string,
   children: React.ReactNode
}

const Row: React.FC<Props> = ({ label, children: value }) => {
  console.log('Row Renderd')
  return (
    <li className='font-semibold text-lg'>
      {label}:
      <span className='ml-2 font-light'>{value}</span>
    </li>
  )
}

export default Row