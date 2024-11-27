import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

const GetInTouchForm = () => {

  const [user, setUser] = useState(
    {
        FullName: '',
        Email: '',
        Phone: '',
        Message: '',
    }
  )

  let name, value;

    const data = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({...user, [name]: value})
    }
    console.log(user);

    const getData = async (e) => {
      const {FullName, Email, Phone, Message
          } = user;
      e.preventDefault();
      const options = {
          method: 'POST',
          headers: {
              'Content-Type' : 'application/json'
          },
          body: JSON.stringify({
              FullName, Email, Phone, Message
          })
      }
      const res = await fetch(
          'https://sj-fintech-157c2-default-rtdb.firebaseio.com/GetInTouch.json',
          options
      )
      if(res) {
          alert('Message sent!')
      } else {
          alert('Error occured')
      }
  }

  return (
    <div>
      <form method='POST'>
        {/* <div  className='m-5 grid laptop:grid-cols-1 laptop:mt-36 laptop:gap-6 tablet:grid-cols-2 tablet:gap-5 mobile:grid-cols-1 mobile:gap-2'> */}
        <div  className='flex flex-col items-center text-left laptop:mt-24 mobile:m-5 mobile:mt-20'>
          <h1 className='mb-10 text-3xl font-bold'>Get In Touch</h1>
            <div className='flex flex-col laptop:w-1/4 mobile:w-full'>
                <p>Name as per Aadhaar :</p>
                <input className='my-2 p-2 border border-black'
                type='text' name='FullName' placeholder='Name as per Aadhar' 
                value={user.FullName}
                onChange={data} required>
                </input>
            </div>

            <div className='flex flex-col laptop:w-1/4 mobile:w-full'>
                <p>Email ID :</p>
                <input className='my-2 p-2 border border-black'
                type='text' name='Email' placeholder='Email' 
                value={user.Email}
                onChange={data} required>
                </input>
            </div>

            <div className='flex flex-col laptop:w-1/4 mobile:w-full'>
                <p>Phone Number :</p>
                <input className='my-2 p-2 border border-black'
                type='text' name='Phone' placeholder='Phone' 
                value={user.Phone}
                onChange={data} required>
              </input>
            </div>

            <div className='flex flex-col laptop:w-1/4 mobile:w-full'>
                <p>Message :</p>
                <textarea className='h-28 my-2 p-2 border border-black'
                type='text' name='Message' placeholder='Reason to get in touch' 
                value={user.Message}
                onChange={data} required>
              </textarea>
            </div>

            <div className='flex'>
              <Link to='/success'>
                <button 
                className='bg-blue-500 py-2 px-36 m-5 text-white rounded mobile:p-2 mobile:px-28'
                onClick={getData}
                > Submit
                </button>
              </Link>
            </div>
          </div>
        
      </form>
    </div>
  )
}

export default GetInTouchForm
