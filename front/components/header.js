import Link from 'next/link';

const Header = () => {
    return (
        <header style={{
            display: 'flex',
            position: 'fixed',
            top: '0px',
            justifyContent: 'space-between',
            padding: '0.5em 1.0em 0.5em 1.0em',

            width: '100vw',
            boxSizing: 'border-box',

            fontSize: '20px',
            color: 'white',
            backgroundColor: 'salmon'
        }}>
            <div>
                <Link href='/'><span>🤫 조용한 동네</span></Link>
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