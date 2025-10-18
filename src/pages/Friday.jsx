import React from 'react';

const WeatherWidget = () => {
  return (
    <div className='h-full w-[22rem] md:w-[22%] bg-red-900 pl-6 p-2'>
    <div className='h-full w-full rounded-md bg-[#BBD7EC]'>
<nav className='h-12 rounded-t-md border-t w-full bg-[#AECADF] p-2 flex'>
<h4 className='font-medium '>Friday</h4>
<p className='md:ml-28 ml-44 font-medium'>11:45 AM</p>
</nav>
<div className='w-full h-[9.5rem] flex'>
    <div className='h-full w-[55%]  '>
    <h1 class="relative text-4xl font-bold ml-2 mt-2">
  16
  <span class="absolute top--2 left-11 text-xl">o</span>
</h1>

<p className="flex items-start ml-2">
  Real Feel <span className="relative left-1">
    18
    <span className="absolute -top-2 left-5 text-xl">o</span>
  </span>
</p>
<p className='text-sm ml-2'>Wind N-E. <span className='text-black'>6-7 km/h</span></p>
<p className='ml-2'> Pressure <span className='font-medium'>100MB</span></p>
<p className='ml-2'> Humidity <span className='font-medium'>51%</span></p>

    </div>
    <div className='h-full w-[45%] '>
        <img src="sun.png" className='ml-6 mb-4' />
        <p className='m'> Sunrise <span className='font-medium pt-12' >5:30AM</span></p>
        <p className='m'> Sunset <span className='font-medium' > 6:45</span></p>

    </div>

</div>
    </div>
   
</div>
  );
};

export default WeatherWidget;