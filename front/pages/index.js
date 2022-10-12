import Image from 'next/image';
import mainImg1 from '../public/images/1.png'
import mainImg2 from '../public/images/2.png'
import mainImg3 from '../public/images/3.png'
import IndexStyles from '../styles/indexStyles'
import G1_YearbyGu from './stats/G1_YearbyGu';
import G2_Seoul_VS_Else from './stats/G2_Seoul_VS_Else';
import G3_EachGu from './stats/G3_EachGu';

const Index = () => {
    return (
        <IndexStyles>
            <Image src={mainImg1} alt='mainImg1'></Image>
            <h1>조용한 동네가 없을까?</h1>
            <div class='question'></div>
            <div class='imgBox'>
                <Image src={mainImg2} alt='mainImg2'></Image>
            </div>

            <div class='textBox'>
                <h2>최근 소음 공해가 큰 문제가 되고 있습니다.</h2><br></br><br></br>
                <p>밖에서 들려 오는 경적 소리에 놀란 적 있으신가요?</p>     
                <p>천장을 울리는 누군가의 발소리로 잠을 못 이룬 적은 없으신가요?</p><br></br>
                <p>소음 공해는 미세먼지와 함께 <span class='strong'>환경을 위협하는 요인으로 지목</span>되고 있습니다.</p>     
                <p>국내에서도 소음에 대해 불편을 호소하는 민원이 계속해서 증가하는 추세입니다.</p>     
                <p>2014년에는 4만 4천 건이었던 민원이 2020년 7만 1천 건까지 늘었죠.</p> <br></br>    
                <p>정부에서도 ‘4차 소음진동관리종합계획’을 마련하며 소음 문제에 대처하고 있지만, </p>     
                <p>여전히 실생활에 와닿는 정보는 미비한 것으로 파악했습니다.</p>   <br></br>
            </div>

            <div class='graph'>
                <G1_YearbyGu _YearbyGu></G1_YearbyGu>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
            <div class='greenBox'>
                <div class='textBox2'>
                    <h2>특히 서울은 </h2>
                    <h2>다른 지역보다 소음 수치가 높습니다</h2><br></br>
                    <p>저희는 <span class='strong'>서울의 소음 문제</span>에 집중하기로 했습니다.</p><br></br>
                    <p><span class='strong'>서울이 국내 타 지역에 비해 가장 높은 소음도</span>를 보였기 때문입니다.</p>
                    <p>특히 조용해야 할 주택가조차 환경 기준의 약 10dB나 초과하는 수준이었죠.</p>
                </div>
                <div class='graph2'>
                    <G2_Seoul_VS_Else></G2_Seoul_VS_Else>
                </div>
            </div>
            

            

            
            <div class='textBox3'>
                <h2>서울 내에도 </h2>
                <h2>어느정도 소음이 덜한 곳은 존재합니다</h2><br></br>
                <p>하지만 중요한 것은 <span class='strong'>서울 내에서도 지역구마다 편차가 존재한다는 점</span>이었습니다.</p>
                <p>강남구와 노원구의 소음 민원 수는 무려 7배 이상의 차이가 있었습니다.</p><br></br>
                <p>따라서 소음 문제가 제일 심각하면서도, 지역구별 차이가 있는 서울을 타겟으로 하여</p>
                <p><span class='strong'>각 지역구와 동의 소음 정보를 가시화할 수 있는 서비스</span>를 제공하려고 합니다.</p>
            </div>

            <div class='graph'>
                <G3_EachGu></G3_EachGu>
            </div>

            <div class='imgBox'>
                <Image src={mainImg3} alt='mainImg3'></Image>
            </div>
            
        </IndexStyles>
    );
}

export default Index;