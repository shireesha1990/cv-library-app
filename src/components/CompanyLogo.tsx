import Image from 'next/image';
import logo from '../../public/cv_logo.svg';

function Logo() {
  return (
    <Image
      src={logo}
      alt="cv library Logo"
      width={200}
      height={100}
    />
  );
}

export default Logo;