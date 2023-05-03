import React from 'react'

const Footer = () => {
  return (
    <footer className='h-full w-full flex justify-center mt-[10rem] pb-12 bg-success text-light'>
      <div className='h-full w-10/12 grid grid-cols-3 justify-between pt-3'>
        {/* column */}
        <div className='flex flex-col gap-4'>
          <h2 className='text-2xl mb-8 text-dark fw-bold underline'>FAQ</h2>
          <span>Where we are based</span>
          <span>How we operate</span>
          <span>Refund policy</span>
        </div>
        {/* column */}
        <div className='flex flex-col gap-4'>
          <h2 className='text-2xl mb-8 text-dark fw-bold underline'>Contacts</h2>
          <span>YouTube: WebDevMania</span>
          <span>YouTube: WebDevMania</span>
          <span>YouTube: WebDevMania</span>
        </div>
        {/* column */}
        <div className='flex flex-col gap-4'>
          <h2 className='text-2xl mb-8 text-dark fw-bold underline'>Privacy Policy</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, dicta! Voluptate nihil quidem omnis voluptatibus minima similique error eius nostrum tempore,
            esse cumque alias unde autem molestiae officiis? Cumque, amet!
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer