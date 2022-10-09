import Link from 'next/link';
import HeaderStyle from '../css/headerStyles';

const Header = () => {
    return (
        <HeaderStyle>
            <div>
                <Link href='/'><span>🤫 조용한 동네</span></Link>
            </div>
            <div>
                <Link href='/prolog'><span>PROLOG</span></Link>
                <Link href='/find'><span>FIND</span></Link>
                <Link href='/info'><span>INFO</span></Link>
            </div>
        </HeaderStyle>
    );
}

export default Header;