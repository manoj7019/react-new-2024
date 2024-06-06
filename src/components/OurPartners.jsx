import { useState } from 'react';
import { Link } from 'react-router-dom';
import Partners from '../partners.json';

const OurPartners = () => {

    const [showMore, setShowMore] = useState(false);

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    return (
        <>
        <div className='laptop:flex flex-col items-center p-8 m-10 border-2 border-gray rounded-xl mobile:p-2'>
            <h2 className='text-3xl font-bold mt-5'>Our Partners</h2>

            <div className='
                grid laptop:grid-cols-6 m-10 gap-10
                mobile:grid-cols-3'>
                {Partners.primary.map(primaryPartner =>
                <img 
                    className='
                    laptop:h-auto w-36
                    mobile:w-auto h-5'
                    src={primaryPartner.img}
                />
                )}
            </div>
            
            
            {showMore && 
            <>
                <div className='
                    grid laptop:grid-cols-6 mb-10 gap-10
                    mobile:grid-cols-3'>
                    {Partners.secondary.map(secondaryPartner =>
                    <img 
                        className='h-auto w-36'
                        src={secondaryPartner.img}
                    />
                    )}
                </div>
            </>
            }

            <Link to='/' className=''>
                <button className='bg-gray-200 mb-5 px-4 py-2 rounded-xl hover:bg-blue-500 hover:text-white'
                    onClick={handleMoreClick}>
                    {showMore ? 'Show Less' : 'Show More'}
                </button>
            </Link>
        </div>
    </>
  )
}

export default OurPartners
