import Link from 'next/link';
import Image from 'next/image';
import HeaderStyle from './headerStyles';
import PaginationTest from '../pagination/PaginationTest'
import logo from '../../public/images/logo.svg'

const Header = () => {
    return (
        <HeaderStyle>
            <div>
                <Link href='/'><h1><Image src={logo} alt="조용할지도 로고" /></h1></Link>
                <nav>
                    <Link href='/find'><span>동네 찾기</span></Link>
                    <Link href='/info'><span>팀 소개</span></Link>
                    <Link href='/pagination_test'><span>PaginationTest</span></Link>
                </nav>
            </div>
        </HeaderStyle>
    );
}

export default Header;