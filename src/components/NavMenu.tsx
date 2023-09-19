import Image from 'next/image';
import logo from '@/assets/svgs/logo.svg';
import userCircle from '@/assets/svgs/userCircle.svg';
import magnifyGlass from '@/assets/svgs/magnifyGlass.svg';
import shoppingCart from '@/assets/svgs/shoppingCart.svg';
import hamburgerMenu from '@/assets/svgs/hamburgerMenu.svg';

const NavMenu = () => {
  return (
    <>
      <div className='flex justify-between'>
        <div className='flex p-3 gap-3'>
          <Image src={hamburgerMenu} alt='menu' />
          {/* <div className='font-rubik font-black'>SHOP.CO</div> */}
          <Image src={logo} alt='store logo' />
        </div>
        <div className='flex p-3 gap-3'>
          <Image src={magnifyGlass} alt='search button' />
          <Image src={shoppingCart} alt='shopping cart' />
          <Image src={userCircle} alt='user' />
        </div>
      </div>
    </>
  );
};

export default NavMenu;

// export function AuthButton({ addedClasses }: authButtonTypes) {
//   const { data: session } = useSession();
//   if (session) {
//     return (
//       <>
//         {/* {session?.user?.name} <br /> */}
//         <Button
//           className={addedClasses}
//           variant={'outline'}
//           onClick={() => signOut()}
//         >
//           Sign Out
//         </Button>
//       </>
//     );
//   } else {
//     return (
//       <>
//         <Button
//           className={addedClasses}
//           variant={'outline'}
//           onClick={() => signIn()}
//         >
//           Sign In
//         </Button>
//       </>
//     );
//   }
// }
