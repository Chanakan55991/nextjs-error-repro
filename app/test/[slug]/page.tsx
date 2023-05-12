'use client'

const ThePage = ({ params }) => {
  // Try changing the className value below, (or modify the html code in any way) and do a manual refresh of the page without restarting server
  return (
    <h1 className='titl'>Hello {params.slug}</h1>
  )
}

export default ThePage
