import Link from 'next/link';
import Image from 'next/image';
import HeaderStyle from './headerStyles';
import logo from '../../public/images/logo.svg'

const Header = () => {
    return (
        <HeaderStyle>
            <div>
                <Link href='/'><h1 className='hoverUp'><Image src={logo} alt="조용할지도 로고" /></h1></Link>
                <nav>
                    <Link href='/find'><span className='hoverUp'>동네 찾기</span></Link>
                    <Link href='/info'><span className='hoverUp'>팀 소개</span></Link>
                    <Link href='/modal_test'><span className='hoverUp'>ModalTest</span></Link>
                </nav>
            </div>
        </HeaderStyle>
    );
}

export default Header;