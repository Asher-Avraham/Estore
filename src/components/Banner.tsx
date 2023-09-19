'use client';

import { useState } from 'react';
import Link from 'next/link';

const Banner = () => {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div
      className={`flex w-full h-7 py-1.5 bg-black text-white text-xs font-normal font-jakarta md:text-sm gap-2.5 justify-center align-middle relative ${
        showBanner ? 'block' : 'hidden'
      }`}
    >
      <>
        <p className='font-extralight'>
          Sign up and get 20% off to your first order.
        </p>
        <Link href='#' className='font-light font-sm underline'>
          Sign Up Now
        </Link>
      </>
      <button
        onClick={() => setShowBanner(false)}
        className='hidden md:block absolute inset-y-0 right-10 align-middle justify-center'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
        >
          <path
            d='M16.2882 14.9617C16.4644 15.1378 16.5633 15.3767 16.5633 15.6258C16.5633 15.8749 16.4644 16.1137 16.2882 16.2898C16.1121 16.466 15.8733 16.5649 15.6242 16.5649C15.3751 16.5649 15.1362 16.466 14.9601 16.2898L9.99997 11.3281L5.03825 16.2883C4.86213 16.4644 4.62326 16.5633 4.37418 16.5633C4.12511 16.5633 3.88624 16.4644 3.71012 16.2883C3.534 16.1122 3.43506 15.8733 3.43506 15.6242C3.43506 15.3751 3.534 15.1363 3.71012 14.9602L8.67184 10L3.71168 5.03828C3.53556 4.86216 3.43662 4.62329 3.43662 4.37422C3.43662 4.12515 3.53556 3.88628 3.71168 3.71016C3.8878 3.53404 4.12668 3.43509 4.37575 3.43509C4.62482 3.43509 4.86369 3.53404 5.03981 3.71016L9.99997 8.67188L14.9617 3.70938C15.1378 3.53326 15.3767 3.43431 15.6257 3.43431C15.8748 3.43431 16.1137 3.53326 16.2898 3.70938C16.4659 3.8855 16.5649 4.12437 16.5649 4.37344C16.5649 4.62251 16.4659 4.86138 16.2898 5.0375L11.3281 10L16.2882 14.9617Z'
            fill='white'
          />
        </svg>
      </button>
    </div>
  );
};
export default Banner;
