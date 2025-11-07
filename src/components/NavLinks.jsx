import { Link } from 'react-router-dom';
import { LinkIcon } from '@heroicons/react/20/solid';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid';
import { PhoneIcon } from '@heroicons/react/20/solid';


export default function NavLinks() {
    return (
        <div className='flex gap-5 '>

            <Link to={"/applyonline"}>
                <div className='flex font-bold gap-2'>
                    <LinkIcon className='w-5' />
                    <p>Apply Online</p>
                </div>

            </Link>
            <Link to={"/studentlogin"}>
                <div className='flex font-bold gap-2'>
                    <ArrowTopRightOnSquareIcon className='w-5' />
                    <p>Student Login</p>
                </div>

            </Link>
            <Link to={"/callback"}>
                <div className='flex font-bold gap-2'>
                    <PhoneIcon className='w-5' />
                    <p>Request A Call Back</p>
                </div>

            </Link>
        </div>


    )
}