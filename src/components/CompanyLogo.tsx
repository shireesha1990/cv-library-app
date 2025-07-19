import Image from 'next/image';
import logo from '../../public/cv_logo.svg';
import styles from '../styles/logo.module.css';

function Logo() {
  return (
    <Image
      src={logo}
      className={styles.company_logo}
      alt="cv library Logo"
      width={350}
      height={130}
    />
  );
}

export default Logo;