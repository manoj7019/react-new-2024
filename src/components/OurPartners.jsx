import { useState } from 'react';
import { Link } from 'react-router-dom';
import BankOne from '../assets/partnerLogos/ambit.jpeg';
import BankTwo from '../assets/partnerLogos/ashv.png';
import BankThree from '../assets/partnerLogos/axis.png';
import BankFour from '../assets/partnerLogos/aye.png';
import BankFive from '../assets/partnerLogos/bajajfin.png';
import BankSix from '../assets/partnerLogos/bandhan.png';
import BankSeven from '../assets/partnerLogos/birla.png';
import BankEight from '../assets/partnerLogos/chola.png';
import BankNine from '../assets/partnerLogos/credilio.png';
import BankEleven from '../assets/partnerLogos/duetstche.png';
import BankTwelve from '../assets/partnerLogos/faircent.png';
import BankThirteen from '../assets/partnerLogos/Fed.jpeg';
import BankFourteen from '../assets/partnerLogos/Fulletron.png';
import BankFifteen from '../assets/partnerLogos/Godrej.jpg';
import BankSixteen from '../assets/partnerLogos/Herofincorp.png';
import BankSeventeen from '../assets/partnerLogos/ICICI.png';
import BankEighteen from '../assets/partnerLogos/idfc.png';
import BankNineteen from '../assets/partnerLogos/incred.png';
import BankTwenty from '../assets/partnerLogos/IndiaBulls.png';
import BankTwentyOne from '../assets/partnerLogos/indifi.png';
import BankTwentyTwo from '../assets/partnerLogos/indusind.png';
import BankTwentyThree from '../assets/partnerLogos/janasmall.png';
import BankTwentyFour from '../assets/partnerLogos/Kotak.png';
import BankTwentyFive from '../assets/partnerLogos/kuwy.jpeg';
import BankTwentySix from '../assets/partnerLogos/kvb.jpeg';
import BankTwentySeven from '../assets/partnerLogos/lendingkart.png';
import BankTwentyEight from '../assets/partnerLogos/ltFin.png';
import BankTwentyNine from '../assets/partnerLogos/manappuram.png';
import BankThirty from '../assets/partnerLogos/muthootFin.png';
import BankThirtyOne from '../assets/partnerLogos/myshubhlife.png';
import BankThirtyTwo from '../assets/partnerLogos/neogrowth.png';
import BankThirtyThree from '../assets/partnerLogos/paysense.png';
import BankThirtyFour from '../assets/partnerLogos/piramal.png';
import BankThirtyFive from '../assets/partnerLogos/pnb.png';
import BankThirtySix from '../assets/partnerLogos/poonawala.png';
import BankThirtySeven from '../assets/partnerLogos/protium.png';
import BankThirtyEight from '../assets/partnerLogos/rbl.png';
import BankThirtyNine from '../assets/partnerLogos/smecorner.png';
import BankFourtyOne from '../assets/partnerLogos/sundharam.png';
import BankFourtyTwo from '../assets/partnerLogos/tata.png';
import BankFourtyThree from '../assets/partnerLogos/ucobank.png';
import BankFourtyFour from '../assets/partnerLogos/ujjivan.png';
import BankFourtyFive from '../assets/partnerLogos/werize.jpg';
import BankFourtySix from '../assets/partnerLogos/yesbank.png';


const OurPartners = () => {

    const [showMore, setShowMore] = useState(false);

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    return (
        <>
        <div className='flex flex-col items-center p-8 m-10 border-2 border-gray rounded-xl'>
            <h2 className='text-3xl font-bold'>Our Partners</h2>
            <div className='grid grid-cols-6 m-10 gap-10'>
                <img 
                    className='h-20 w-auto'
                    src={BankOne}
                />
                <img 
                    className='h-20 w-auto'
                    src={BankTwo}
                />
                <img
                    className='h-20 w-auto'
                    src={BankThree}
                />
                <img 
                    className='h-20 w-auto'
                    src={BankFour}
                />
                <img 
                    className='h-20 w-auto'
                    src={BankFive}
                />
                <img 
                    className='h-20 w-auto'
                    src={BankSix}
                />
                <img 
                    className='h-20 w-auto'
                    src={BankSeven}
                />
                <img 
                    className='h-20 w-auto'
                    src={BankEight}
                />
                <img 
                    className='h-20 w-auto'
                    src={BankNine}
                />
                <img 
                    className='h-20 w-auto'
                    src={BankEleven}
                />
                <img 
                    className='h-20 w-auto'
                    src={BankTwelve}
                />
                <img 
                    className='h-20 w-auto'
                    src={BankThirteen}
                />
                </div>

                {showMore && 
                <div className='grid grid-cols-6 mb-10 gap-10'>
                <img 
                    className='h-20 w-auto'
                    src={BankFifteen}
                />
                <img 
                    className='h-20 w-auto'
                    src={BankSixteen}
                />
                <img 
                    className='h-20 w-auto'
                    src={BankSeventeen}
                />
                <img 
                    className='h-20 w-auto'
                    src={BankEighteen}
                />
                <img 
                    className='h-20 w-auto'
                    src={BankFourteen}
                />
                <img 
                    className='h-20 w-auto'
                    src={BankNineteen}
                />
                <img 
                    className='h-20 w-auto'
                    src={BankTwenty}
                />
                <img 
                    className='h-20 w-auto'
                    src={BankTwentyOne}
                />
                <img 
                    className='h-20 w-auto'
                    src={BankTwentyTwo}
                />
                <img 
                    className='h-20 w-auto'
                    src={BankTwentyThree}
                />
                <img 
                    className='h-20 w-auto'
                    src={BankTwentyFour}
                />
                <img 
                    className='h-20 w-auto'
                    src={BankTwentyFive}
                />
                <img 
                    className='h-20 w-auto'
                    src={BankTwentySix}
                />
                <img 
                    className='h-20 w-auto'
                    src={BankTwentySeven}
                />
                <img 
                    className='h-20 w-auto'
                    src={BankTwentyEight}
                />
                <img 
                    className='h-20 w-auto'
                    src={BankTwentyNine}
                />
                <img 
                    className='h-20 w-auto'
                    src={BankThirty}
                />
                <img 
                    className='h-20 w-auto'
                    src={BankThirtyOne}
                />
                <img 
                    className='h-20 w-auto'
                    src={BankThirtyTwo}
                />
                <img 
                    className='h-20 w-auto'
                    src={BankThirtyThree}
                />
                <img 
                    className='h-20 w-auto'
                    src={BankThirtyFour}
                />
                <img 
                    className='h-20 w-auto'
                    src={BankThirtyFive}
                />
                <img 
                    className='h-20 w-auto'
                    src={BankThirtySix}
                />
                <img 
                    className='h-20 w-auto'
                    src={BankThirtySeven}
                />
                <img 
                    className='h-20 w-auto'
                    src={BankThirtyEight}
                />
                <img 
                    className='h-20 w-auto'
                    src={BankThirtyNine}
                />
                <img 
                    className='h-20 w-auto'
                    src={BankFourtyFour}
                />
                <img 
                    className='h-20 w-auto'
                    src={BankFourtyOne}
                />
                <img 
                    className='h-20 w-auto'
                    src={BankFourtyTwo}
                />
                <img 
                    className='h-20 w-auto'
                    src={BankFourtyThree}
                />
                            <img 
                    className='h-20 w-auto'
                    src={BankFourtyFour}
                />
                <img 
                    className='h-20 w-auto'
                    src={BankFourtyFive}
                />
                <img 
                    className='h-20 w-auto'
                    src={BankFourtySix}
                />
                </div>
                }

            <Link to='/' className=''>
                <button className='bg-gray-200 mb-2 px-4 py-2 rounded-xl hover:bg-black hover:text-white'
                    onClick={handleMoreClick}>
                    {showMore ? 'Show Less' : 'Show More'}
                </button>
            </Link>
        </div>
    </>
  )
}

export default OurPartners
