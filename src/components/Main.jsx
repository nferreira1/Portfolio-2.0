// React Type Animation
import { TypeAnimation } from 'react-type-animation'

// React Icons
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main'>
      {/* Logo background main 👇*/}
      <img className='w-full h-screen object-cover object-left scale-x-[-1]' src='' alt='' />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
        <div className='max-w-[700px] m-auto w-full h-screen flex flex-col justify-center items-center lg:items-start '>
          <h1 className='text-4xl font-bold text-gray-800 sm:text-5xl'>Eu sou o Nathan Ferreira</h1>
          <h2 className='flex text-2xl text-gray-800 pt-4 sm:text-3xl'>
            Eu sou um
            <TypeAnimation
              sequence={[
                'desenvolvedor',
                1000,
                'entusiasta de tecnologia',
                2000,
              ]}
              wrapper='div'
              speed={50}
              cursor={true}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
              repeat={Infinity}
            />
          </h2>

          <div className='flex justify-between pt-6 max-w-[200px] w-full'>
            <a href='https://github.com/nferreira1' target='_blank' rel='noreferrer'>
              <FaGithub size={20} />
            </a>
            <a href='https://www.facebook.com/nathanhenrique.vieira/' target='_blank' rel='noreferrer'>
              <FaFacebook size={20} />
            </a>
            <a href='https://www.instagram.com/nathan_fefa/' target='_blank' rel='noreferrer'>
              <FaInstagram size={20} />
            </a>
            <a href='https://www.linkedin.com/in/nathan-ferreira-97a355231/' target='_blank' rel='noreferrer'>
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Main 