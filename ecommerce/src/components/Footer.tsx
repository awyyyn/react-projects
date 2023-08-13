import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className='mx-auto'>
      <p className='text-primary text-center'>2023 La Store Store All rights reserved</p>
      <div className='flex gap-x-3 justify-center py-4 text-secondary  cursor-pointer text-3xl'>
        <a href='#' className='hover:text-primary'>
          <AiFillInstagram />
        </a>
        <a href='#' className='hover:text-primary'>
          <AiOutlineTwitter />
        </a>
      </div>
    </footer>
  )
}

export default Footer