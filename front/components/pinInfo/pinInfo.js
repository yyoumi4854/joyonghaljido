import Link from 'next/link';

const PinInfo = () => {
    return (
        <>
            <div style={{ width: '100%', height: '100%' }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    height: '100px',
                    padding: '20px',
                    boxSizing: 'border-box',
                    borderBottom: '1px solid lightgrey'
                }}>
                    <div>
                        <Link href='/find'><span style={{ fontSize: '20px' }}>←</span></Link>
                    </div>
                    <div>
                        <div style={{ fontSize: '20px', fontWeight: '600', paddingBottom: '10px' }}>
                            <span style={{ padding: '0px 10px 0px 10px' }}>동대문구</span>
                            <span style={{ color: 'lightseagreen' }}>답십리 2동</span>
                        </div>
                        <div>
                            <span style={{ paddingLeft: '10px', color: 'lightseagreen' }}>스타벅스 앞</span>
                        </div>
                    </div>
                </div>

                <div style={{ width: '100%', height: 'calc(100% - 160px)' }}>
                    <div style={{ height: '200px', padding: '20px' }}>
                        <span style={{ fontWeight: '600', fontSize: '16px', color: 'lightseagreen' }}>
                            어느 정도의 소음인가요?
                        </span>
                    </div>
                    <div style={{ height: '200px', padding: '20px' }}>
                        <span style={{ fontWeight: '600', fontSize: '16px', color: 'lightseagreen' }}>
                            시간대별 소음 그래프
                        </span>
                    </div>

                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    bottom: '0px',

                    fontSize: '20px',
                    width: '100%', height: '60px',
                    backgroundColor: 'lightseagreen', color: 'white'
                }}>
                    2022 조용할지도
                </div>
            </div>
        </>
    );
}

export default PinInfo;