import { useEffect, useState } from 'react'
import GitHubLogo from './GitHubLogo'

function Navbar() {
   const [xPosition, setXPosition] = useState(0)
   const [isHovering, setIsHovering] = useState(false)

   // Sets hovering effect's x position
   function handleXPos(event: MouseEvent) {
      setXPosition(event.clientX - 75)
   }

   useEffect(() => {
      if (isHovering) {
         window.addEventListener('mousemove', handleXPos)
      }

      // cleanup
      return () => window.removeEventListener('mousemove', handleXPos)
   }, [isHovering])

   return (
      <div
         className='sticky top-0 bg-primary-content/50 backdrop-blur-md z-10'
         onMouseOver={() => setIsHovering(true)}
         onMouseLeave={() => setIsHovering(false)}
      >
         <div className='navbar  not-prose max-w-7xl mx-auto'>
            <div className='navbar-start'>
               <h2 className='font-thin text-2xl'>Paul Richan</h2>
            </div>
            <div className='navbar-center max-md:hidden'>
               <div className='btn-group'>
                  <a href='#about' className='btn btn-outline btn-xs btn-primary'>
                     About
                  </a>
                  <a href='#projects' className='btn btn-outline btn-xs btn-primary'>
                     Projects
                  </a>
                  <a href='#contact' className='btn btn-outline btn-xs btn-primary'>
                     Contact
                  </a>
               </div>
            </div>
            <div className='navbar-end'>
               <div className='flex gap-3 max-md:hidden items-center'>
                  <a
                     href='https://www.linkedin.com/in/paul-richan-60684623b/'
                     target='_blank'
                     rel='noopener noreferrer'
                     className='btn btn-sm btn-ghost h-fit'
                  >
                     <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='icon icon-tabler icon-tabler-brand-linkedin'
                        width='38'
                        height='38'
                        viewBox='0 0 24 24'
                        strokeWidth='2'
                        stroke='currentColor'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                     >
                        <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                        <path d='M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z'></path>
                        <path d='M8 11l0 5'></path>
                        <path d='M8 8l0 .01'></path>
                        <path d='M12 16l0 -5'></path>
                        <path d='M16 16v-3a2 2 0 0 0 -4 0'></path>
                     </svg>
                  </a>
                  <a
                     className='btn btn-circle btn-sm btn-outline'
                     href='https://github.com/paulrichan'
                     target='_blank'
                     rel='noreferrer noopener'
                  >
                     <GitHubLogo />
                  </a>
               </div>

               <div className='dropdown dropdown-end md:hidden'>
                  <label tabIndex={0} className='btn btn-sm px-2'>
                     <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='icon icon-tabler icon-tabler-menu-2'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        strokeWidth='2'
                        stroke='currentColor'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                     >
                        <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                        <path d='M4 6l16 0'></path>
                        <path d='M4 12l16 0'></path>
                        <path d='M4 18l16 0'></path>
                     </svg>
                  </label>
                  <ul tabIndex={0} className='dropdown-content menu p-2 shadow bg-primary-content rounded-box w-52'>
                     <li>
                        <a href='#about'>About</a>
                     </li>
                     <li>
                        <a href='#projects'>Projects</a>
                     </li>
                     <li>
                        <a href='#contact'>Contact</a>
                     </li>
                     <li>
                        <a href='https://github.com/paulrichan' target='_blank' rel='noreferrer noopener'>
                           <GitHubLogo />
                           GitHub Profile
                        </a>

                        <a
                           href='https://www.linkedin.com/in/paul-richan-60684623b/'
                           target='_blank'
                           rel='noopener noreferrer'
                        >
                           <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='icon icon-tabler icon-tabler-brand-linkedin'
                              width='24'
                              height='24'
                              viewBox='0 0 24 24'
                              strokeWidth='2'
                              stroke='currentColor'
                              fill='none'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                           >
                              <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                              <path d='M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z'></path>
                              <path d='M8 11l0 5'></path>
                              <path d='M8 8l0 .01'></path>
                              <path d='M12 16l0 -5'></path>
                              <path d='M16 16v-3a2 2 0 0 0 -4 0'></path>
                           </svg>
                           LinkedIn Profile
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>

         {/* Hover Effect */}
         <div className='bg-primary/10 overflow-hidden relative h-[1px]'>
            <div
               className={`rounded-full h-10 w-32 blur-xl bg-primary transform-gpu ${!isHovering && 'mx-auto'}`}
               style={{ transform: isHovering ? `translateX(${xPosition}px` : '' }}
            />
         </div>
      </div>
   )
}

export default Navbar
