import pic from '../assets/img/picture.jpg'
export default function HomeContent() {
    return (
        <div>
            <div>
                <img src={pic} alt="/" className="object-cover" style={{ width: '100%', height: '30rem' }} />
            </div>
            <div className='grid md:grid-cols-4 grid-cols-2 gap-0'>
                <div className='relative'>
                    <img src={pic} alt="/" className="object-fill " style={{ width: 'auto', height: '15rem' }} />
                    <div className='absolute bottom-0 w-full flex justify-center text-white text-sm uppercase pb-2'>some text here</div>
                </div>
                <div className='relative'>
                    <img src={pic} alt="/" className="object-fill " style={{ width: 'auto', height: '15rem' }} />
                    <div className='absolute bottom-0 w-full flex justify-center text-white text-sm uppercase pb-2'>some text here</div>
                </div>
                <div className='relative'>
                    <img src={pic} alt="/" className="object-fill " style={{ width: 'auto', height: '15rem' }} />
                    <div className='absolute bottom-0 w-full flex justify-center text-white text-sm uppercase pb-2'>some text here</div>
                </div>
                <div className='relative'>
                    <img src={pic} alt="/" className="object-fill " style={{ width: 'auto', height: '15rem' }} />
                    <div className='absolute bottom-0 w-full flex justify-center text-white text-sm uppercase pb-2'>some text here</div>
                </div>
            </div>
            <div className='flex items-center justify-center pa-5 h-[8rem] bg-sky-950'>
                <div className='bg-red-500 flex items-center justify-center py-3 px-6 uppercase text-white'>view all industries</div>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-4 md:px-[3rem] lg:px-[6rem] px-2 py-6 place-items-center'>
                <div className='grid grid-rows-3 grid-flow-row gap-0 border-2 border-gray-200 md:w-[13rem] h-[auto] w-1/2 justify-center items-center text-center rounded-sm px-3 v'>
                    <div className='flex justify-center'>
                    <img className="h-20 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                    </div>
                    <div className='text-sky-950 text-lg font-bold uppercase h-[auto]'>utility</div>
                    <div className='text-xs text-grey-200' >The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. </div>
                </div>
                <div className='grid grid-rows-3 grid-flow-row gap-0 border-2 border-gray-200 md:w-[13rem] h-[auto] w-1/2 justify-center items-center text-center rounded-sm px-3 v '>
                    <div className='flex justify-center'>
                    <img className="h-20 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                    </div>
                    <div className='text-sky-950 text-lg font-bold uppercase h-[auto]'>utility</div>
                    <div  className='text-xs text-grey-200'>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. </div>
                </div>
                <div className='grid grid-rows-3 grid-flow-row gap-0 border-2 border-gray-200 md:w-[13rem] h-[auto]  w-1/2 justify-center items-center text-center rounded-sm px-3 py-2'>
                    <div className='flex justify-center'>
                    <img className="h-20 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                    </div>
                    <div className='text-sky-950 text-lg font-bold uppercase h-[auto]'>utility</div>
                    <div  className='text-xs text-grey-200'>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. </div>
                </div>
            </div>
        </div>
    )
}