import React from 'react'
import heroImg from '../assets/hero.png'

export default function CardMovie() {
    return (
        <div className='flex ' >
            <div className='border-[1px] border-black rounded-xl'>


                <div className='bg-gray-300 rounded-t-xl '>
                    <p>7,8</p>
                    <img className='h-[12rem]' src={heroImg} alt="my-img" />

                </div>
                <div className='flex flex-col text-center'>
                    <h1 className=''>title</h1>
                    <p>2027</p>
                </div>
            </div>
        </div>
    )
}
/*
The OMDb API <donotreply@omdbapi.com>
	
3:03 AM (6 minutes ago)
	
	
to me
Here is your key: b9348b85

Please append it to all of your API requests,

OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=b9348b85

Click the following URL to activate your key: http://www.omdbapi.com/apikey.aspx?VERIFYKEY=5e6a10ea-9d11-4141-97c2-62508b68e43a
If you did not make this request, please disregard this email.
*/