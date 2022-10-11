import Link from 'next/link';

const Header = () => {
    return (
        <header style={{
            display: 'flex',
            position: 'fixed',
            top: '0px',
            justifyContent: 'space-between',
            alignItems: 'center',

            width: '100vw',
            height: '50px',
            padding: '0px 15px 0px 15px',
            boxSizing: 'border-box',

            fontSize: '20px',
            color: 'lightseagreen',
            fontWeight: '700',
            backgroundColor: 'white',
            borderBottom: '1px solid lightgrey'
        }}>
            <div>
                <Link href='/'><span>조용할지도</span></Link>
            </div>
            <div>
                <Link href='/prolog'><span>PROLOG</span></Link>
                <Link href='/find'><span style={{ paddingLeft: '1.0em' }}>FIND</span></Link>
                <Link href='/info'><span style={{ paddingLeft: '1.0em' }}>INFO</span></Link>
            </div>
        </header>
    );
}

export default Header;