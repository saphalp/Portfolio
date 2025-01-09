import React from 'react'

function PageHeader({header, description}) {
  return (
    <>
    <div className="page-header my-10 pt-10 text-center">
        <h2 className='text-4xl font-medium text-center'>{header}</h2>
        <p className='my-3'>{description}</p>
    </div>
    </>
  )
}

export default PageHeader