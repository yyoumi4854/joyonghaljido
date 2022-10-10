import Link from 'next/link';
import Image from 'next/image';
import HeaderStyle from '../styles/headerStyles';

// img
import logo from '../public/images/logo.svg'

const Header = () => {
    return (
        <HeaderStyle>
            <div>
                <Link href='/'><h1><Image src={logo} alt="test" /></h1></Link>
                <nav>
                    <Link href='/info'><span>팀 소개</span></Link>
                    <Link href='/find'><span>동네 찾기</span></Link>
                    {/* <Link href='/prolog'><span>PROLOG</span></Link> */}
                </nav>
            </div>
        </HeaderStyle>
    );
}

export default Header;