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
        <div className='laptop:flex flex-col items-center p-8 m-10 border-2 border-gray rounded-xl mobile:flex items-center m-6 mobile:p-0'>
            <h2 className='text-3xl font-bold mt-5'>Our Partners</h2>

            <div className='
                grid laptop:grid-cols-6 m-10 laptop:gap-10
                mobile:grid-cols-3 mobile:gap-5 mobile:m-5
                tablet:grid-cols-4 tablet:gap-8 tablet:m-10'>
                {Partners.primary.map(primaryPartner =>
                <img 
                    className='
                    laptop:h-auto w-36'
                    src={primaryPartner.img}
                    key={primaryPartner.id}
                />
                )}
            </div>
            
            
            {showMore && 
            <>
                <div className='mt-0 mb-10
                    grid laptop:grid-cols-6 m-10 laptop:gap-10
                    mobile:grid-cols-3 mobile:gap-5 mobile:mt-0 m-5
                    tablet:grid-cols-4 tablet:gap-8 tablet:mt-0 m-5'>
                    {Partners.secondary.map(secondaryPartner =>
                    <img 
                        className='h-auto w-36'
                        src={secondaryPartner.img}
                        key={secondaryPartner.id}
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
