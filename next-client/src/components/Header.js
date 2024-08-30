import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const Header = () => {
  const { pathname } = useRouter();
  return (
    <header className="bg-[#38220f] text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-lg font-cursive flex justify-between items-center gap-4">
          <img src='\images\coffee_logo.png' alt="Logo" className='w-14'/>Coffee Diary</div>
        <nav>
          <div className="flex">
            <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
            <Link href="/recommendation" className={`nav-link ${pathname === '/recommendation' ? 'active' : ''}`}>Recommendations</Link>
            <Link href="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>About</Link>
            <Link href="/contact" className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
            <Link href="/login" className={`nav-link ${pathname === '/login' ? 'active' : ''}`}>
              <FontAwesomeIcon icon={faUserShield} className="text-white w-6 h-6" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header; 

