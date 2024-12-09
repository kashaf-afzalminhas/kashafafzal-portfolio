import React from 'react';

function Contact() {
  return (
    <div name='contact' className='w-full h-auto bg-gradient-to-b from-[#B3E5FC] via-[#FFF8E1] to-white text-black'>
      <div className='flex flex-col justify-center max-w-screen-lg mx-auto h-full px-4'>
        <div className='pb-8 mt-4 text-center'>
          <p className='text-4xl font-bold inline'>Contact Here</p>
          <p className='py-6'>Submit the form below to get in touch with me</p>
        </div>
        <div className='flex justify-center items-center'>
          <form action="https://getform.io/f/ajjerzda" method='post' className='flex flex-col w-full md:w-1/2'>
            <input
              type="text"
              name='name'
              placeholder='Enter Your Name'
              className='p-2 bg-transparent border-2 rounded-md text-black focus:outline-none'
            />
            <input
              type="text"
              name='email'
              placeholder='Enter Your Email'
              className='my-4 p-2 bg-transparent border-2 rounded-md text-black focus:outline-none'
            />
            <textarea
              placeholder='Enter Your Message'
              name="Message"
              rows="10"
              className='p-2 bg-transparent border-2 focus:outline-none text-black rounded-md'
            ></textarea>
            <button className='text-gray bg-gradient-to-b from-[#B3E5FC] via-[#FFF8E1] to-[#FFF8E1] px-6 py-3 my-9 mx-auto flex items-center rounded-md hover:scale-100 duration-300'>Let's Talk</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;