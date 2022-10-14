import Link from 'next/link';

// style
import IndexStyles from '../styles/indexStyles'
import FooterStyle from '../styles/footerStyles';

// graph
import G1_YearbyGu from './stats/G1_YearbyGu';
import G2_Seoul_VS_Else from './stats/G2_Seoul_VS_Else';
import G3_EachGu from './stats/G3_EachGu';


const Index = () => {
    return (
        <IndexStyles>
            <section className='banner'>
                <div>
                    <div className='textCon'>
                        <p>혹시 어제도 시끄러우셨나요?</p>
                        <h2 className='bannerTitle'>당신에게 알맞은 조용한 동네를 찾아보세요!</h2>
                    </div>

                    <Link href='/find'>
                        <button className='findBtn'>조용한 동네 찾으러 가기</button>
                    </Link>
                </div>
            </section>

            <section className='questions'>
                <h2>조용한 동네가 없을까?</h2>
                <div className='imgBox'></div>
            </section>


            <section className='sec'>
                <h2>최근 소음 공해가 큰 문제가 되고 있습니다.</h2>
                
                <div className='textBox'>
                    <p>
                        밖에서 들려 오는 경적 소리에 놀란 적 있으신가요?<br />
                        천장을 울리는 누군가의 발소리로 잠을 못 이룬 적은 없으신가요?<br /><br />

                        소음 공해는 미세먼지와 함께 환경을 위협하는 요인으로 지목되고 있습니다.<br />
                        국내에서도 소음에 대해 불편을 호소하는 민원이 계속해서 증가하는 추세입니다.<br />
                        2014년에는 4만 4천 건이었던 민원이 2020년 7만 1천 건까지 늘었죠.<br /><br />

                        정부에서도 ‘4차 소음진동관리종합계획’을 마련하며 소음 문제에 대처하고 있지만,<br />
                        여전히 실생활에 와닿는 정보는 미비한 것으로 파악했습니다.
                    </p>
                </div>

                <div className='graph'>
                    <p>서울시 연도별 소음민원 발생량</p>
                    <div className='graphBox'>
                        <G1_YearbyGu></G1_YearbyGu>
                    </div>

                    <div className='label'>
                        <dl>
                            <dt></dt>
                            <dd>소음민원 권수</dd>
                        </dl>
                    </div>
                </div>
            </section>


            <section className='sec bg'>
                <h2 className='twoLines'>특히 서울은<br />다른 지역보다 소음 수치가 높습니다</h2>

                <div className='textBox'>
                    <p>
                        저희는 서울의 소음 문제에 집중하기로 했습니다.<br /><br />

                        서울이 국내 타 지역에 비해 가장 높은 소음도를 보였기 때문입니다.<br />
                        특히 조용해야 할 주택가조차 환경 기준의 약 10dB이나 초과하는 수준이었죠.<br />
                    </p>
                </div>

                <div className='graph'>
                    <p>지역별 평균 소음 측정량 (데시벨)</p>

                    <div className='graphCon'>
                        <div className='bg'></div>
                        <div className='graphBox posi'>
                            <G2_Seoul_VS_Else></G2_Seoul_VS_Else>
                        </div>
                    </div>

                    <div className='label graph2'>
                        <dl>
                            <dt></dt>
                            <dd>서울 평균 소음 (db)</dd>
                        </dl>
                        <dl>
                            <dt></dt>
                            <dd>기타지역 평균 소음 (db)</dd>
                        </dl>
                    </div>
                </div>
            </section>


            <section className='sec'>
                <h2 className='twoLines'>서울 내에도<br />어느정도 소음이 덜한 곳은 존재합니다.</h2>

                <div className='textBox'>
                    <p>
                        여기서 가장 중요한 점은 서울 내에서도 지역구마다 편차가 존재한다는 점이었습니다.<br />
                        강남구와 노원구의 소음 민원 수는 무려 7배 이상의 차이가 있었습니다.<br /><br />

                        따라서 소음 문제가 제일 심각하면서도, 지역구별 차이가 있는 서울을 타겟으로 하여<br />
                        각 지역구와 동의 소음 정보를 가시화할 수 있는 서비스를 제공하려고 합니다.
                    </p>
                </div>

                <div className='graph'>
                    <p>구 별 소음민원 발생량 및 인구 수</p>
                    <div className='graphBox'>
                        <G3_EachGu></G3_EachGu>
                    </div>

                    <div className='label graph3'>
                        <dl>
                            <dt></dt>
                            <dd>구 별 소음민원 발생량</dd>
                        </dl>
                        <dl>
                            <dt></dt>
                            <dd>구 별 인구 수</dd>
                        </dl>
                    </div>
                </div>
            </section>


            <section className='banner'>
                <div>
                    <div className='textCon'>
                        <h2 className='twoLines'>그럼 저희와 함께<br />어떤 동네가 조용한지 살펴볼까요?</h2>
                    </div>

                    <Link href='/find'>
                        <button className='findBtn'>조용한 동네 찾으러 가기</button>
                    </Link>
                </div>
            </section>

            <FooterStyle>&copy; 2022 조용할지도</FooterStyle>
        </IndexStyles>
    );
}

export default Index;