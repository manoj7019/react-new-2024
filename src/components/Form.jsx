import React from 'react'
import { useState } from 'react'

const LoanDetailsForm = () => {

    const [user, setUser] = useState(
        {
            FullName: '',
            Email: '',
            Phone: '',
            PermanentCity: '',
        }
    )

    // const sameAddress = () => {
    //     setUser(user.ResidentialAddress === user.PermanentAddress);
    //     setUser(user.ResidentialCity === user.PermanentCity);
    //     setUser(user.ResidentialState === user.PermanentState);
    //     setUser(user.ResidentialPincode === user.PermanentPincode);
    // }

    let name, value;

    const data = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({...user, [name]: value})
    }
    console.log(user);

    const getData = async (e) => {
        const {FullName, Email, Phone, PermanentCity
            } = user;
        e.preventDefault();
        const options = {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                FullName, Email, Phone, PermanentCity
            })
        }
        const res = await fetch(
            'https://sj-fintech-157c2-default-rtdb.firebaseio.com/UserData.json',
            options
        )
        if(res) {
            alert('Details submitted!')
        } else {
            alert('Error occured')
        }
    }

    return (
        <div>
            <div className='flex flex-col justify-between gap-10 laptop:m-10 mt-44 mobile:m-0'>
                <h1 className='text-4xl font-bold m-5 mt-20 mb-0'>Fill the details below :</h1>
                <form method='POST'>
                    {/* <h2 className='text-2xl font-bold ml-5'>Fill the details below :</h2> */}
                    <div  className='m-5 grid laptop:grid-cols-4 laptop:gap-6 tablet:grid-cols-2 tablet:gap-5 mobile:grid-cols-1 mobile:gap-2'>
                        <div className='flex flex-col'>
                            <p>Name as per Aadhaar :</p>
                            <input className='my-2 p-2 border border-black'
                            type='text' name='FullName' placeholder='Name as per Aadhar' 
                            value={user.FullName}
                            onChange={data} required>
                            </input>
                        </div>

                        <div className='flex flex-col'>
                            <p>Email ID :</p>
                            <input className='my-2 p-2 border border-black'
                            type='text' name='Email' placeholder='Email' 
                            value={user.Email}
                            onChange={data} required>
                            </input>
                        </div>

                        <div className='flex flex-col'>
                            <p>Phone Number :</p>
                            <input className='my-2 p-2 border border-black'
                            type='text' name='Phone' placeholder='Phone' 
                            value={user.Phone}
                            onChange={data} required>
                        </input>
                        </div>

                        <div className='flex flex-col'>
                            <p>City :</p>
                            <input className='my-2 p-2 border border-black'
                            type='text' name='PermanentCity' placeholder='City'
                            value={user.PermanentCity}
                            onChange={data} required>
                            </input>
                        </div>
                    </div>
                    
                    <div>
                        <button 
                        className='bg-blue-500 py-2 px-6 m-5 text-white rounded laptop:w-1/4 mobile:w-3/4'
                        onClick={getData}
                        > Submit
                        </button>
                    </div>
                    </form>
                </div>
        </div>
    )
    }

export default LoanDetailsForm
