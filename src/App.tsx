import { TypeAnimation } from 'react-type-animation'
import Navbar from './components/Navbar'
import aboutPic from '/me.png'
import pepitiDashURL from '/pepiti-dash.png'
import mlbStatsGameURL from '/mlb-stats-game.png'
import kittrURL from '/kittr-home.png'
import GitHubLogo from './components/GitHubLogo'

function App() {
   return (
      <div className='prose max-w-none scroll-smooth'>
         {/* NavBar */}
         <Navbar />

         {/* Hero Container */}
         <div className='hero min-h-screen max-w-7xl mx-auto'>
            <div className='hero-content text-center'>
               <div className='max-w-md'>
                  <h1 className='text-5xl font-bold my-0'>Paul Richan</h1>
                  <div className='divider divider-vertical md:w-96' />
                  <h1 className='font-thin'>
                     I am{' '}
                     <TypeAnimation
                        sequence={[
                           'Motivated', // Deletes 'One' and types 'Two'
                           2500, // Waits 2.5s
                           'a Team Member',
                           2000, // Waits 2s
                           'a Web Developer', // Types 'One'
                           2000,
                        ]}
                        wrapper='span'
                        cursor={true}
                        repeat={Infinity}
                        className='font-thin text-primary'
                        //  style={{ fontSize: '2em', display: 'inline-block' }}
                     />
                  </h1>
               </div>
            </div>
         </div>

         {/* About Me */}
         <div id='about' className='divider divider-vertical'>
            About Me
         </div>

         <div className='hero min-h-screen max-w-7xl mx-auto'>
            <div className='hero-content flex-col lg:flex-row lg:justify-evenly'>
               <img src={aboutPic} className='max-w-sm rounded-lg shadow-2xl' />
               <div className='lg:w-1/2'>
                  <h1 className='text-5xl font-bold'>About Me</h1>
                  <p>
                     My education started at the{' '}
                     <span className='text-primary font-bold'>University of San Diego </span>from 2015-2018. During my
                     junior year I was drafted by the{' '}
                     <span className='text-transparent font-bold bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text'>
                        Chicago Cubs
                     </span>{' '}
                     to play professional baseball. During my time as a professional athlete, I taught myself how to
                     develop websites. When I have time/need to switch up my dev environment, I also dabble in video
                     game development, primarily in the Unreal engine. I am now attending{' '}
                     <span className='text-transparent font-bold bg-gradient-to-r from-red-800 via-yellow-600 to-red-800 bg-clip-text'>
                        Arizona State University
                     </span>{' '}
                     in pursuit of a degree in Graphic Information Technology (Full Stack Web Development) with an
                     expected graduation year of 2024. I am currently seeking a position as a Front End Web Developer
                     with the opportunity to grow into a Full Stack position.
                  </p>
               </div>
            </div>
         </div>

         {/* Showcase - Projects */}
         <div id='projects' className='divider divider-vertical'>
            Showcase
         </div>

         <div className='min-h-screen max-w-7xl mx-auto flex items-center flex-wrap justify-evenly gap-10'>
            {/* Pepiti Dashboard */}
            <div>
               <div className='card max-w-[350px] bg-neutral-focus shadow-xl not-prose'>
                  <figure className='h-44 relative overflow-hidden'>
                     <img src={pepitiDashURL} alt='dash img' className='absolute top-0' />
                  </figure>
                  <div className='card-body'>
                     <h2 className='card-title'>Video Game Stats App</h2>
                     <p>
                        Group Project: Consumes REST API of race stats collected from our own custom hosted servers
                        stored in a Mongo database. Myself and another web developer developed the entirety of the front
                        end. We often introduce new features.
                     </p>
                     <div className='card-actions justify-center my-3'>
                        <div className='badge badge-outline'>React</div>
                        <div className='badge badge-outline'>Next.js</div>
                        <div className='badge badge-outline'>Typescript</div>
                        <div className='badge badge-outline'>TailwindCSS</div>
                        <div className='badge badge-outline'>Python</div>
                     </div>
                     <div className='card-actions'>
                        <a
                           href='https://pepiti-dashboard-git-daisy-redesign-prichan.vercel.app/dashboard'
                           target='_blank'
                           rel='noopener noreferrer'
                           className='btn btn-sm btn-block btn-primary'
                        >
                           Visit
                        </a>
                     </div>
                  </div>
               </div>
            </div>

            {/* MLB Stats Game */}
            <div>
               <div className='card max-w-[350px] bg-neutral-focus shadow-xl not-prose'>
                  <figure className='h-44 relative overflow-hidden'>
                     <img src={mlbStatsGameURL} alt='dash img' className='absolute top-0' />
                  </figure>
                  <div className='card-body relative'>
                     <a
                        href='https://github.com/paulrichan/baseball-guessing-app'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='btn btn-sm btn-circle btn-outline mx-auto absolute z-10 right-5 top-4'
                     >
                        <GitHubLogo />
                     </a>
                     <h2 className='card-title'>MLB Stats Game</h2>
                     <p>
                        WIP: Full Stack application that consumes a REST API Flask back end. It allows users to set the
                        parameters of the game with the type of player and which stat they would compare. Score adds up
                        by one with each correct player chosen and restarts if you lose.
                     </p>
                     <div className='card-actions justify-center my-3'>
                        <div className='badge badge-outline'>React</div>
                        <div className='badge badge-outline'>Vite.js</div>
                        <div className='badge badge-outline'>Typescript</div>
                        <div className='badge badge-outline'>TailwindCSS</div>
                        <div className='badge badge-outline'>Python</div>
                        <div className='badge badge-outline'>Docker</div>
                     </div>
                     <div className='card-actions'>
                        <a
                           href='https://baseball-guessing-app.vercel.app/'
                           target='_blank'
                           rel='noopener noreferrer'
                           className='btn btn-sm w-full btn-primary'
                        >
                           Visit
                        </a>
                     </div>
                  </div>
               </div>
            </div>

            {/* Kittr */}
            <div>
               <div className='card max-w-[350px] bg-neutral-focus shadow-xl not-prose'>
                  <figure className='h-44 relative overflow-hidden'>
                     <img src={kittrURL} alt='dash img' className='absolute top-0' />
                  </figure>
                  <div className='card-body relative'>
                     <a
                        href='https://github.com/kittrgg/kittr'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='btn btn-sm btn-circle btn-outline mx-auto absolute z-10 right-5 top-4'
                     >
                        <GitHubLogo />
                     </a>
                     <h2 className='card-title'>Kittr</h2>
                     <p>
                        Open Source: A project I was hired for as a contracted position. Some components that I got into
                        production was the side scroller on the home page and a full onboarding tutorial for new users.
                        I was also tasked with cleaning up old code and migrating to new packages.
                     </p>
                     <div className='card-actions justify-center my-3'>
                        <div className='badge badge-outline'>React</div>
                        <div className='badge badge-outline'>Vite.js</div>
                        <div className='badge badge-outline'>Typescript</div>
                        <div className='badge badge-outline'>TailwindCSS</div>
                        <div className='badge badge-outline'>Python</div>
                        <div className='badge badge-outline'>Docker</div>
                     </div>
                     <div className='card-actions'>
                        <a
                           href='https://kittr.gg/'
                           target='_blank'
                           rel='noopener noreferrer'
                           className='btn btn-sm w-full btn-primary'
                        >
                           Visit
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Showcase - Projects */}
         <div id='contact' className='divider divider-vertical'>
            Contact Me
         </div>

         <div className='md:w-1/2 md:mx-auto pt-20 px-5'>
            <div className='mockup-code'>
               <pre data-prefix='$'>
                  <code>python3 is_available_for_work.py</code>
               </pre>
               <pre data-prefix='>' className='text-warning'>
                  <code>checking...</code>
               </pre>
               <pre data-prefix='>' className='text-success'>
                  <code>
                     <TypeAnimation
                        sequence={[
                           'I am! Send me an email!', // Types 'One'
                           4500,
                           '',
                        ]}
                        wrapper='span'
                        cursor={false}
                        repeat={Infinity}
                     />
                  </code>
               </pre>
            </div>
         </div>

         <a href='mailto:paulrichan@icloud.com' className='btn btn-ghost flex w-fit mx-auto gap-5 my-10'>
            <svg
               xmlns='http://www.w3.org/2000/svg'
               className='icon icon-tabler icon-tabler-mail-filled'
               width='36'
               height='36'
               viewBox='0 0 24 24'
               strokeWidth='2'
               stroke='currentColor'
               fill='none'
               strokeLinecap='round'
               strokeLinejoin='round'
            >
               <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
               <path
                  d='M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z'
                  strokeWidth='0'
                  fill='currentColor'
               ></path>
               <path
                  d='M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z'
                  strokeWidth='0'
                  fill='currentColor'
               ></path>
            </svg>
            Email Me
         </a>
      </div>
   )
}

export default App
