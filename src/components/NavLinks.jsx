import { Link } from 'react-router-dom';
import { LinkIcon } from '@heroicons/react/20/solid';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid';
import { PhoneIcon } from '@heroicons/react/20/solid';



export default function NavLinks() {
    return (
        <div className='flex gap-3 xl:gap-15 text-white xl:h-10 2xl:h-25 items-center '>

            <Link to={"/applyonline"}>
                <div className='flex topNavbarDivClass'>
                    <LinkIcon className='topNavBarIconStyle' />
                    <p>Apply Online</p>
                </div>

            </Link>
            <Link to={"/studentlogin"}>
                <div className='flex topNavbarDivClass'>
                    <ArrowTopRightOnSquareIcon className='topNavBarIconStyle' />
                    <p>Student Login</p>
                </div>

            </Link>
            <Link to={"/callback"}>
                <div className='flex topNavbarDivClass'>
                    <PhoneIcon className='topNavBarIconStyle' />
                    <p>Request A Call Back</p>
                </div>

            </Link>
        </div>


    )
}