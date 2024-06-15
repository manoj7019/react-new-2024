import {useState} from 'react'
import { Link } from 'react-router-dom';

const Form = () => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [dOB, setDOB] = useState('');
    const [phone, setPhone] = useState('');
    const [aadharNum, setAadharNum] = useState('');
    const [aadharFront, setAadharFront] = useState('');
    const [aadharBack, setAadharBack] = useState('');
    const [panNum, setPanNum] = useState('');
    const [panImage, setPanImage] = useState('');
    const [gender, setGender] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('')
    const [permanentAddress, setPermanentAddress] = useState('')
    const [permanentCity, setPermanentCity] = useState('')
    const [permanentState, setPermanentState] = useState('')
    const [permanentPincode, setPermanentPincode] = useState('')
    const [residentialAddress, setResidentialAddress] = useState('')
    const [sameAddress, setSameAddress] = useState(false)
    const [residentialCity, setResidentialCity] = useState('')
    const [residentialState, setResidentialState] = useState('')
    const [residentialPincode, setResidentialPincode] = useState('')
    const [rentalImage, setRentalImage] = useState('')
    const [showKYC, setShowKYC] = useState(false);

    function handleFullNameChange(e) {
        setFullName(e.target.value);
    }
    function handleEmailChange(e) {
        setEmail(e.target.value);
    }
    function handlePhoneChange(e) {
        setPhone(e.target.value);
    }
    function handleMaritalStatusChange(e) {
        setMaritalStatus(e.target.value);
    }
    function handleGenderChange(e) {
        setGender(e.target.value);
    }
    function handleDOBChange(e) {
        setDOB(e.target.value);
    }
    function handleAadharNumChange(e) {
        setAadharNum(e.target.value);
    }
    function handlePanNumChange(e) {
        setPanNum(e.target.value);
    }
    function handlePermanentAddressChange(e) {
        setPermanentAddress(e.target.value);
    }
    function handlePermanentCityChange(e) {
        setPermanentCity(e.target.value);
    }
    function handlePermanentStateChange(e) {
        setPermanentState(e.target.value);
    }
    function handlePermanentPincodeChange(e) {
        setPermanentPincode(e.target.value);
    }
    function handleResidentialAddressChange(e) {
        setResidentialAddress(e.target.value);
    }

    function handleSameAddressChange() {
        setResidentialAddress(permanentAddress)
        setResidentialCity(permanentCity)
        setResidentialState(permanentState)
        setResidentialPincode(permanentPincode)
    }

    function handleCheckBoxChange() {
        setSameAddress(!sameAddress)
    }

    function handleResidentialCityChange(e) {
        setResidentialCity(e.target.value);
    }
    function handleResidentialStateChange(e) {
        setResidentialState(e.target.value);
    }
    function handleResidentialPincodeChange(e) {
        setResidentialPincode(e.target.value);
    }
    function handleAadharFrontChange(e) {
        setAadharFront(URL.createObjectURL(e.target.files[0]));
    }
    function handleAadharBackChange(e) {
        setAadharBack(URL.createObjectURL(e.target.files[0]));
    }
    function handlePanImageChange(e) {
        setPanImage(URL.createObjectURL(e.target.files[0]));
    }
    function handleRentalImageChange(e) {
        setRentalImage(URL.createObjectURL(e.target.files[0]));
    }
    
    const handleKYCSubmit = (e) => {
        e.preventDefault();
        setFullName(fullName);
        setEmail(email);
        setPhone(phone);
        setGender(gender);
        setDOB(dOB);
        setAadharNum(aadharNum);
        setAadharFront(aadharFront);
        setAadharBack(aadharBack);
        setPanNum(panNum);
        setMaritalStatus(maritalStatus);
        setPanImage(panImage);
        setRentalImage(rentalImage);
        setPermanentAddress(permanentAddress);
        setPermanentCity(permanentCity);
        setPermanentState(permanentState);
        setPermanentPincode(permanentPincode);
        setResidentialAddress(residentialAddress);
        setResidentialCity(residentialCity);
        setResidentialState(residentialState);
        setResidentialPincode(residentialPincode);
    }

    function handleShowKYC() {
        setShowKYC(!showKYC);
    }

    function handleEdit() {
        setShowKYC(!showKYC);
    }

    return (
        <>
        <div className='flex flex-col justify-between gap-20 laptop:mt-20 mobile:mt-20 w-full'>
            <form onSubmit={handleKYCSubmit} method='POST'>
                <div className='flex justify-between items-center m-5'>
                    <h1 onClick={handleShowKYC} className='cursor-pointer laptop:text-3xl mobile:text-xl font-bold'><u>Personal Details</u></h1>
                    {/* <div> */}
                    {showKYC ? <button onClick={handleShowKYC} className='bg-blue-500 text-white text-xl px-4 rounded ml-20'> - </button>
                    : <button onClick={handleShowKYC} className='bg-blue-500 text-white text-xl px-4 rounded ml-28'> + </button>}
                    {/* {showKYC ? ''
                    : <button onClick={handleEdit} className='bg-black text-white px-4 py-1 rounded ml-2'> Edit </button>} */}
                    {/* </div> */}
                </div>

                {showKYC &&
                    <div  className='m-5 grid laptop:grid-cols-4 laptop:gap-6 tablet:grid-cols-2 tablet:gap-5 mobile:grid-cols-1 mobile:gap-2'>
                        <div className='flex flex-col'>
                            <p>Name as per Aadhaar :</p>
                            <input
                                className='my-2 p-2 border border-black'
                                placeholder='Name as per Aadhar'
                                name='fullName'
                                value={fullName}
                                id='userFullName'
                                onChange={handleFullNameChange}
                            />
                        </div>
                        <div className='flex flex-col'>
                            <p>Email ID :</p>
                            <input
                                className='my-2 p-2 border border-black'
                                placeholder='Email'
                                name='email'
                                value={email}
                                id='userEmail'
                                onChange={handleEmailChange}
                            />
                        </div>
                        <div className='flex flex-col'>
                            <p>Phone Number :</p>
                            <input
                                className='my-2 p-2 border border-black'
                                placeholder='Phone number'
                                name='phone'
                                value={phone}
                                id='userPhone'
                                onChange={handlePhoneChange}
                            />
                        </div>
                        <div className='flex flex-col'>
                            <p>Gender :</p>
                            <select
                                className='my-2 p-2 pr-3 border border-black'
                                id='userGender'
                                name='gender'
                                onChange={handleGenderChange}
                            >
                                <option value='gen' selected disabled>Gender</option>
                                <option value='Male'>Male</option>
                                <option value='Female'>Female</option>
                                <option value='Others'>Others</option>
                            </select>
                        </div>

                        <div className='flex flex-col'>
                            <p>Date of Birth :</p>
                            <input
                                className='my-2 p-2 border border-black'
                                placeholder='Date of Birth'
                                name='dOB'
                                value={dOB}
                                type='date'
                                id='userDOB'
                                onChange={handleDOBChange}
                            />
                        </div>

                        <div className='flex flex-col'>
                            <p>Aadhar Number :</p>
                            <input
                                className='my-2 p-2 border border-black'
                                placeholder='Aadhar Number'
                                name='aadharNum'
                                value={aadharNum}
                                id='userAadharNum'
                                onChange={handleAadharNumChange}
                            />
                        </div>

                        <div className='flex flex-col'>
                            <p>Aadhar card front:</p>
                            <input
                                className='my-2 p-1.5 border border-black'
                                type='file'
                                name='aadharFront'
                                id='aadharFront'
                                onChange={handleAadharFrontChange}
                            />
                        </div>

                        <div className='flex flex-col'>
                            <p>Aadhar card back:</p>
                            <input
                                className='my-2 p-1.5 border border-black'
                                type='file'
                                name='aadharBack'
                                id='aadharBack'
                                onChange={handleAadharBackChange}
                            />
                        </div>

                        <div className='flex flex-col'>
                            <p>PAN Number :</p>
                            <input
                                className='my-2 p-2 border border-black'
                                placeholder='PAN Number'
                                name='panNum'
                                value={panNum}
                                id='panNum'
                                onChange={handlePanNumChange}
                            />
                        </div>

                        <div className='flex flex-col'>
                            <p>Marital Status :</p>
                                <label>
                                    <input
                                        className='m-2 p-2 border border-black'
                                        value='Single'
                                        name='single'
                                        id='single'
                                        type='radio'
                                        checked={maritalStatus === 'Single'}
                                        onChange={handleMaritalStatusChange}
                                    />
                                Single
                                </label>
                                <label>
                                    <input
                                        className='m-2 p-2 border border-black'
                                        value='Married'
                                        name='married'
                                        id='married'
                                        type='radio'
                                        checked={maritalStatus === 'Married'}
                                        onChange={handleMaritalStatusChange}
                                    />
                                Married
                                </label>
                        </div>

                        <div className='flex flex-col'>
                            <p>PAN Card:</p>
                            <input
                                className='my-2 p-1.5 border border-black'
                                type='file'
                                name='panImage'
                                id='panImage'
                                onChange={handlePanImageChange}
                            />
                        </div>

                        <div className='flex flex-col'>
                            <p>Permanent Address :</p>
                            <input
                                className='my-2 p-2 border border-black'
                                placeholder=''
                                name='permanentAddress'
                                value={permanentAddress}
                                id='permanentAddress'
                                onChange={handlePermanentAddressChange}
                            />
                        </div>

                        <div className='flex flex-col'>
                            <p>City :</p>
                            <input
                                className='my-2 p-2 border border-black'
                                placeholder=''
                                name='permanentCity'
                                value={permanentCity}
                                id='permanentCity'
                                onChange={handlePermanentCityChange}
                            />
                        </div>

                        <div className='flex flex-col'>
                            <p>State :</p>
                            <input
                                className='my-2 p-2 border border-black'
                                placeholder=''
                                name='permanentState'
                                value={permanentState}
                                id='permanentState'
                                onChange={handlePermanentStateChange}
                            />
                        </div>

                        <div className='flex flex-col'>
                            <p>Pincode :</p>
                            <input
                                className='my-2 p-2 border border-black'
                                placeholder=''
                                name='permanentPincode'
                                value={permanentPincode}
                                id='permanentPincode'
                                onChange={handlePermanentPincodeChange}
                            />
                        </div>

                        <div className='flex flex-col'>
                            <label>
                                <input
                                    className='m-2 p-2 border border-black'
                                    value='Same Address'
                                    id='sameAddress'
                                    type='checkbox'
                                    name='sameAddress'
                                    checked={sameAddress}
                                    onChange={()=> {handleSameAddressChange(); handleCheckBoxChange();}}
                                />
                            Same as Permanent Address
                            </label>
                        </div>

                        <div className='flex flex-col'>
                            <p>Residential Address :</p>
                            <input
                                className='my-2 p-2 border border-black'
                                placeholder=''
                                name='residentialAddress'
                                value={residentialAddress}
                                id='residentialAddress'
                                onChange={handleResidentialAddressChange}
                            />
                        </div>

                        <div className='flex flex-col'>
                            <p>City :</p>
                            <input
                                className='my-2 p-2 border border-black'
                                placeholder=''
                                name='residentialCity'
                                value={residentialCity}
                                id='residentialCity'
                                onChange={handleResidentialCityChange}
                            />
                        </div>

                        <div className='flex flex-col'>
                            <p>State :</p>
                            <input
                                className='my-2 p-2 border border-black'
                                placeholder=''
                                name='residentialState'
                                value={residentialState}
                                id='residentialState'
                                onChange={handleResidentialStateChange}
                            />
                        </div>

                        <div className='flex flex-col'>
                            <p>Pincode :</p>
                            <input
                                className='my-2 p-2 border border-black'
                                placeholder=''
                                name='residentialPincode'
                                value={residentialPincode}
                                id='residentialPincode'
                                onChange={handleResidentialPincodeChange}
                            />
                        </div>

                        <div className='flex flex-col'>
                            <p>Rental / Lease agreement:</p>
                            <input
                                className='my-2 p-1.5 border border-black'
                                type='file'
                                name='rentalImage'
                                id='rentalImage'
                                onChange={handleRentalImageChange}
                            />
                        </div>

                        <Link to='/success' >
                        <button
                        className='bg-blue-500 py-2 px-6 my-5 text-white rounded'
                        onClick ={() => {handleKYCSubmit(); handleEdit();}}
                        > Submit
                        </button>
                        </Link>
                </div>
                }
            </form>

            <div className='hidden flex flex-col items-center gap-4 m-5'>
                <h1>{fullName}</h1>
                <h1>{email}</h1>
                <h1>{phone}</h1>
                <h1>{dOB}</h1>
                <h1>{gender}</h1>
                <h1>{aadharNum}</h1>
                <h1>{panNum}</h1>
                <h1>{maritalStatus}</h1>
                <h1>{permanentAddress} {permanentCity} {permanentState} {permanentPincode}</h1>
                <h1>{residentialAddress} {residentialCity} {residentialState} {residentialPincode}</h1>
                
                <div className='flex gap-4'>
                    <img className='w-auto h-80 rounded-xl' src={aadharFront}/>
                    <img className='w-auto h-80 rounded-xl' src={aadharBack}/>
                </div>
                <div className='flex gap-4'>
                    <img className='w-auto h-80 rounded-xl' src={panImage}/>
                    <img className='w-auto h-80 rounded-xl' src={rentalImage}/>
                </div>
            </div>
        </div>
        </>
        )
    }

export default Form
