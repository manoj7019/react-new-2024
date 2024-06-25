import React from 'react'
import { useState } from 'react'

const PartnerIndividualForm = () => {

    const [user, setUser] = useState(
        {
            FullName: '',
            Email: '',
            Phone: '',
            DOB: '',
            AadharNumber: '',
            PanNumber: '',
            Gender: '',
            WorkExperience: '',
            MaritalStatus: '',
            PermanentAddress: '',
            PermanentCity: '',
            PermanentState: '',
            PermanentPincode: '',
            ResidentialAddress: '',
            ResidentialCity: '',
            ResidentialState: '',
            ResidentialPincode: '',
            CompanyName: '',
            CompanyEmail: '',
            HREmail: '',
            NetSalary: '',
            CompanyAddress: '',
            CompanyCity: '',
            CompanyState: '',
            CompanyPincode: '',
            BankName: '',
            AccountHolderName: '',
            AccountNumber: '',
            IFSCCode: '',
            RefOneName: '',
            RefOnePhone: '',
            RefOneAddress: '',
            RefTwoName: '',
            RefTwoPhone: '',
            RefTwoAddress: '',
            RefThreeName: '',
            RefThreePhone: '',
            RefThreeAddress: '',
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
        const {FullName, Email, Phone, DOB, AadharNumber, PanNumber, Gender, WorkExperience, MaritalStatus,
            PermanentAddress, PermanentCity, PermanentState, PermanentPincode,
            ResidentialAddress, ResidentialCity, ResidentialState, ResidentialPincode,
            CompanyName, CompanyEmail, HREmail, NetSalary, 
            CompanyAddress, CompanyCity, CompanyState, CompanyPincode,
            BankName, AccountHolderName, AccountNumber, IFSCCode, 
            RefOneName, RefOnePhone, RefOneAddress,
            RefTwoName, RefTwoPhone, RefTwoAddress,
            RefThreeName, RefThreePhone, RefThreeAddress
            } = user;
        e.preventDefault();
        const options = {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                FullName, Email, Phone, DOB, AadharNumber, PanNumber, Gender, WorkExperience, MaritalStatus,
                PermanentAddress, PermanentCity, PermanentState, PermanentPincode,
                ResidentialAddress, ResidentialCity, ResidentialState, ResidentialPincode,
                CompanyName, CompanyEmail, HREmail, NetSalary, 
                CompanyAddress, CompanyCity, CompanyState, CompanyPincode,
                BankName, AccountHolderName, AccountNumber, IFSCCode, 
                RefOneName, RefOnePhone, RefOneAddress,
                RefTwoName, RefTwoPhone, RefTwoAddress,
                RefThreeName, RefThreePhone, RefThreeAddress
            })
        }
        const res = await fetch(
            'https://upload-file-to-db-default-rtdb.firebaseio.com/UserData.json',
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
                <h1 className='text-4xl font-bold m-5 mt-20 mb-0'>Hey! Welcome.</h1>
                <form method='POST'>
                    <h2 className='text-2xl font-bold ml-5'>Personal Details</h2>
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
                            <p>Date of Birth :</p>
                            <input className='my-2 p-2 border border-black'
                            type='date' name='DOB' placeholder='Phone' 
                            value={user.DOB}
                            onChange={data} required>
                        </input>
                        </div>

                        <div className='flex flex-col'>
                            <p>Aadhar Number :</p>
                            <input className='my-2 p-2 border border-black'
                            type='text' name='AadharNumber' placeholder='Aadhar Number' 
                            value={user.AadharNumber}
                            onChange={data} required>
                            </input>
                        </div>

                        <div className='flex flex-col'>
                            <p>PAN Number :</p>
                            <input className='my-2 p-2 border border-black'
                            type='text' name='PanNumber' placeholder='PAN Number' 
                            value={user.PanNumber}
                            onChange={data} required>
                            </input>
                        </div>

                        <div className='flex flex-col'>
                            <p>Gender :</p>
                            <select
                                className='my-2 p-2 border border-black'
                                name='Gender'
                                value={user.Gender}
                                onChange={data} required
                            >
                                <option value='Select'>Select</option>
                                <option value='Male'> Male </option>
                                <option value='Female'> Female </option>
                                <option value='Others'> Others </option>
                            </select>
                        </div>

                        <div className='flex laptop:flex-row mobile:flex-col mobile:items-start laptop:items-center gap-3'>
                            <p>Marital Status :</p>
                            <label>
                                <input className='m-1 p-2 border border-black'
                                type='radio' name='MaritalStatus' placeholder='PAN Number' 
                                value='Single'
                                onChange={data}>
                                </input>
                                Single
                            </label>

                            <label>
                                <input className='m-1 p-2 border border-black'
                                type='radio' name='MaritalStatus' placeholder='PAN Number' 
                                value='Married'
                                onChange={data}>
                                </input>
                                Married
                            </label>
                        </div>

                        <div className='flex flex-col'>
                            <p>Permanent Address :</p>
                            <input className='my-2 p-2 border border-black'
                            type='text' name='PermanentAddress' 
                            value={user.PermanentAddress}
                            onChange={data} required>
                            </input>
                        </div>

                        <div className='flex flex-col'>
                            <p>City :</p>
                            <input className='my-2 p-2 border border-black'
                            type='text' name='PermanentCity' 
                            value={user.PermanentCity}
                            onChange={data} required>
                            </input>
                        </div>

                        <div className='flex flex-col'>
                            <p>State :</p>
                            <input className='my-2 p-2 border border-black'
                            type='text' name='PermanentState' 
                            value={user.PermanentState}
                            onChange={data} required>
                            </input>
                        </div>

                        <div className='flex flex-col'>
                            <p>Pincode :</p>
                            <input className='my-2 p-2 border border-black'
                            type='text' name='PermanentPincode' 
                            value={user.PermanentPincode}
                            onChange={data} required>
                        </input>
                        </div>

                        <div className='flex flex-col'>
                            <p>Residential Address :</p>
                            <input className='my-2 p-2 border border-black'
                            type='text' name='ResidentialAddress' 
                            value={user.ResidentialAddress}
                            onChange={data} required>
                            </input>
                        </div>

                        <div className='flex flex-col'>
                            <p>City :</p>
                            <input className='my-2 p-2 border border-black'
                            type='text' name='ResidentialCity' 
                            value={user.ResidentialCity}
                            onChange={data} required>
                            </input>
                        </div>
                        
                        <div className='flex flex-col'>
                            <p>State :</p>
                            <input className='my-2 p-2 border border-black'
                            type='text' name='ResidentialState' 
                            value={user.ResidentialState}
                            onChange={data} required>
                            </input>
                        </div>
                        
                        <div className='flex flex-col'>
                            <p>Pincode :</p>
                            <input className='my-2 p-2 border border-black'
                            type='text' name='ResidentialPincode' 
                            value={user.ResidentialPincode}
                            onChange={data} required>
                        </input>
                        </div>
                    </div>

                    <h2 className='text-2xl font-bold m-5'>Company Details</h2>
                    
                    <div  className='m-5 grid laptop:grid-cols-4 laptop:gap-6 tablet:grid-cols-2 tablet:gap-5 mobile:grid-cols-1 mobile:gap-2'>
                    <div className='flex flex-col'>
                        <p>Name of the Company :</p>
                        <input className='my-2 p-2 border border-black'
                        type='text' name='CompanyName' 
                        placeholder='Company Name'
                        value={user.CompanyName}
                        onChange={data} required>
                        </input>
                    </div>

                    <div className='flex flex-col'>
                            <p>Work Experience :</p>
                            <select
                                className='my-2 p-2 border border-black'
                                name='WorkExperience'
                                value={user.WorkExperience}
                                onChange={data} required
                            >
                                <option value='0-1 Yr'>0-1 yr</option>
                                <option value='1-3 Yrs'> 1-3 yrs </option>
                                <option value='3-5 Yrs'> 3-5 yrs </option>
                                <option value='5-7 Yrs'> 5-7 yrs </option>
                                <option value='7 Yrs +'> 7 yrs + </option>
                            </select>
                        </div>

                    <div className='flex flex-col'>
                        <p>Company Email ID :</p>
                        <input className='my-2 p-2 border border-black'
                        type='text' name='CompanyEmail' 
                        placeholder='Company Email'
                        value={user.CompanyEmail}
                        onChange={data} required>
                        </input>
                    </div>

                    <div className='flex flex-col'>
                        <p>HR Email ID :</p>
                        <input className='my-2 p-2 border border-black'
                        type='text' name='HREmail' 
                        placeholder='HR Email'
                        value={user.HREmail}
                        onChange={data} required>
                        </input>
                    </div>
                    
                    <div className='flex flex-col'>
                        <p>Net Salary per month (in Rupees) :</p>
                        <input className='my-2 p-2 border border-black'
                        type='text' name='NetSalary'
                        placeholder='Net Salary (in Rupees)' 
                        value={user.NetSalary}
                        onChange={data} required>
                        </input>
                    </div>
                    
                    <div className='flex flex-col'>
                        <p>Company Address :</p>
                        <input className='my-2 p-2 border border-black'
                        type='text' name='CompanyAddress' 
                        value={user.CompanyAddress}
                        onChange={data} required>
                        </input>
                    </div>

                    <div className='flex flex-col'>
                        <p>City :</p>
                        <input className='my-2 p-2 border border-black'
                        type='text' name='CompanyCity' 
                        value={user.CompanyCity}
                        onChange={data}>
                        </input>
                    </div>
                    
                    <div className='flex flex-col'>
                        <p>State :</p>
                        <input className='my-2 p-2 border border-black'
                        type='text' name='CompanyState' 
                        value={user.CompanyState}
                        onChange={data} required>
                        </input>
                    </div>
                    
                    <div className='flex flex-col'>
                        <p>Pincode :</p>
                        <input className='my-2 p-2 border border-black'
                        type='text' name='CompanyPincode' 
                        value={user.CompanyPincode}
                        onChange={data} required>
                        </input>
                    </div>
                    </div>

                    <h2 className='text-2xl font-bold m-5'>Bank Details</h2>

                    <div  className='m-5 grid laptop:grid-cols-4 laptop:gap-6 tablet:grid-cols-2 tablet:gap-5 mobile:grid-cols-1 mobile:gap-2'>
                    <div className='flex flex-col'>
                        <p>Name of the Bank :</p>
                        <input className='my-2 p-2 border border-black'
                        type='text' name='BankName' 
                        placeholder='Bank Name'
                        value={user.BankName}
                        onChange={data} required>
                        </input>
                    </div>

                    <div className='flex flex-col'>
                        <p>Account Holder Name :</p>
                        <input className='my-2 p-2 border border-black'
                        type='text' name='AccountHolderName' 
                        placeholder='Account Holder Name'
                        value={user.AccountHolderName}
                        onChange={data} required>
                        </input>
                    </div>

                    <div className='flex flex-col'>
                        <p>Account Number :</p>
                        <input className='my-2 p-2 border border-black'
                        type='text' name='AccountNumber' 
                        placeholder='Account Number'
                        value={user.AccountNumber}
                        onChange={data} required>
                        </input>
                    </div>
                    
                    <div className='flex flex-col'>
                        <p>IFSC Code :</p>
                        <input className='my-2 p-2 border border-black'
                        type='text' name='IFSCCode'
                        placeholder='IFSC Code' 
                        value={user.IFSCCode}
                        onChange={data} required>
                        </input>
                    </div>
                    </div>

                    <h2 className='text-2xl font-bold m-5'>Reference</h2>
                    
                    <div  className='m-5 grid laptop:grid-cols-3 laptop:gap-6 tablet:grid-cols-3 tablet:gap-5 mobile:grid-cols-1 mobile:gap-2'>

                    <div className='flex flex-col'>
                        <p>Reference (1) Name :</p>
                        <input className='my-2 p-2 border border-black'
                        type='text' name='RefOneName' 
                        value={user.RefOneName}
                        onChange={data} required>
                        </input>
                    </div>

                    <div className='flex flex-col'>
                        <p>Reference (1) Phone :</p>
                        <input className='my-2 p-2 border border-black'
                        type='text' name='RefOnePhone' 
                        value={user.RefOnePhone}
                        onChange={data} required>
                        </input>
                    </div>
                    
                    <div className='flex flex-col'>
                        <p>Reference (1) Address :</p>
                        <input className='my-2 p-2 border border-black'
                        type='text' name='RefOneAddress' 
                        value={user.RefOneAddress}
                        onChange={data} required>
                        </input>
                    </div>

                    <div className='flex flex-col'>
                        <p>Reference (2) Name :</p>
                        <input className='my-2 p-2 border border-black'
                        type='text' name='RefTwoName' 
                        value={user.RefTwoName}
                        onChange={data} required>
                        </input>
                    </div>

                    <div className='flex flex-col'>
                        <p>Reference (2) Phone :</p>
                        <input className='my-2 p-2 border border-black'
                        type='text' name='RefTwoPhone' 
                        value={user.RefTwoPhone}
                        onChange={data} required>
                        </input>
                    </div>

                    <div className='flex flex-col'>
                        <p>Reference (2) Address :</p>
                        <input className='my-2 p-2 border border-black'
                        type='text' name='RefTwoAddress' 
                        value={user.RefTwoAddress}
                        onChange={data} required>
                        </input>
                    </div>

                    <div className='flex flex-col'>
                        <p>Reference (3) Name :</p>
                        <input className='my-2 p-2 border border-black'
                        type='text' name='RefThreeName' 
                        value={user.RefThreeName}
                        onChange={data} required>
                    </input>
                    </div>

                    <div className='flex flex-col'>
                        <p>Reference (3) Phone :</p>
                        <input className='my-2 p-2 border border-black'
                        type='text' name='RefThreePhone' 
                        value={user.RefThreePhone}
                        onChange={data} required>
                        </input>
                    </div>
                    
                    <div className='flex flex-col'>
                        <p>Reference (3) Address :</p>
                        <input className='my-2 p-2 border border-black'
                        type='text' name='RefThreeAddress' 
                        value={user.RefThreeAddress}
                        onChange={data} required>
                        </input>
                    </div>
                    </div>
                    
                    <div>
                        <button 
                        className='bg-blue-500 py-2 px-6 m-5 text-white rounded laptop:w-1/4 mobile:w-3/4'
                        onClick={getData}
                        >Save & Continue
                        </button>
                    </div>
                    </form>
                </div>
        </div>
    )
    }

export default PartnerIndividualForm
