import React from 'react'

const SubscribeSection = () => {
  return (
    <div className='bg-accent mt-32'> 
<div className='max-w-[1350px] w-full mx-auto flex items-center justify-end bg-accent py-9' >
        <div className='flex flex-col '>
        <h2 className='text-[30px] text-primaryBlack'>Подпишитесь и будьте в курсе!</h2>
        <p className='text-secondaryGray pt-5'>Акции, скидки, распродажи ждут!</p>
        <div className='border border-accent rounded-[50px] overflow-hidden mt-6 bg-white' >
            <input type="text" placeholder='Введите email' className='pl-[25px] pr-[252px] py-[11px]  outline-none  ' />
            <button className='buttonG'>Подписаться</button>
        </div>

        </div>
       

    </div>
    </div>
    
  )
}

export default SubscribeSection