import TeamInfoLayout from "./teamInfo.style";
import Carousel from 'react-bootstrap/Carousel';
import FooterStyle from '../styles/footerStyles';

const TeamInfo = () => {
    return (
        <>
            <TeamInfoLayout>
                <section>
                    <div className="inner">
                        <h2>팀원 소개</h2>

                        <div className="slideSec">
                            <div className="left">
                                <h3>프론트엔드</h3>
                                <p className="nameList">최은오, 윤시준, 유민지, 박지연</p>

                                <Carousel className="slideCon">
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src='images/teamInfo/red.png'
                                            alt="최은오"
                                        />
                                        <Carousel.Caption>
                                            <div style={{ height: '100%', marginBottom: '40px' }}>
                                                <p style={{ fontSize: '50px' }}>최은오</p>
                                                <p style={{ fontSize: '30px', paddingTop: '40px' }}>그림 그리는 FE 개발자 🎨</p>
                                                <div style={{ padding: '15px 0 40px 0', }}>
                                                    <span className="badge">Next.js</span>
                                                    <span className="badge">Redux</span>
                                                    <span className="badge">Express.js</span>
                                                    <span className="badge">Bootstrap</span>
                                                    <span className="badge">mongoDB</span>
                                                </div>
                                                <div className="sub">
                                                    <span>Email : pixel@kakao.com</span>
                                                    <span>/</span>
                                                    <span><a href="https://github.com/EunoChoi">GitHub</a></span>
                                                </div>
                                            </div>
                                        </Carousel.Caption>
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src='images/teamInfo/orange.png'
                                            alt="윤시준"
                                        />
                                        <Carousel.Caption>
                                            <div style={{ height: '100%', marginBottom: '40px' }}>
                                                <p style={{ fontSize: '50px' }}>윤시준</p>
                                                <p style={{ fontSize: '30px', paddingTop: '40px' }}>react… 리액트가 끝이라니!</p>
                                                <div style={{ padding: '15px 0 40px 0', }}>
                                                    <span className="badge">React.js</span>
                                                    <span className="badge">javaScript</span>
                                                    <span className="badge">Bootstrap</span>
                                                    <span className="badge">CSS</span>
                                                </div>
                                                <div className="sub">
                                                    <span>Email : webcodur@gmail.com</span>
                                                    <span>/</span>
                                                    <span><a href="https://github.com/webcodur">GitHub</a></span>
                                                </div>
                                            </div>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src='images/teamInfo/yellow.png'
                                            alt="유민지"
                                        />
                                        <Carousel.Caption>
                                            <div style={{ height: '100%', marginBottom: '40px' }}>
                                                <p style={{ fontSize: '50px' }}>유민지</p>
                                                <p style={{ fontSize: '30px', paddingTop: '40px' }}>디자인이 좋은 FE 개발자 😊</p>
                                                <div style={{ padding: '15px 0 40px 0', }}>
                                                    <span className="badge">React.js</span>
                                                    <span className="badge">javaScript</span>
                                                    <span className="badge">CSS</span>
                                                </div>
                                                <div className="sub">
                                                    <span>Email : yyoumi4854@gmail.com</span>
                                                    <span>/</span>
                                                    <span><a href="https://github.com/yyoumi4854">GitHub</a></span>
                                                </div>
                                            </div>
                                        </Carousel.Caption>
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src='images/teamInfo/green.png'
                                            alt="박지연"
                                        />
                                        <Carousel.Caption>
                                            <div style={{ height: '100%', marginBottom: '40px' }}>
                                                <p style={{ fontSize: '50px' }}>박지연</p>
                                                <p style={{ fontSize: '30px', paddingTop: '40px' }}>왕왕<del>왕</del> 주니어 개발자 💪</p>
                                                <div style={{ padding: '15px 0 40px 0', }}>
                                                    <span className="badge">React.js</span>
                                                    <span className="badge">javaScript</span>
                                                    <span className="badge">CSS</span>
                                                </div>
                                                <div className="sub">
                                                    <span>Email : katkrarrrr@gmail.com</span>
                                                    <span>/</span>
                                                    <span><a href="https://github.com/yeoooon">GitHub</a></span>
                                                </div>
                                            </div>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </div>

                            <div className="right">
                                <h3>백엔드</h3>
                                <p className="nameList">연다은봄, 채은빈</p>

                                <Carousel className="slideCon">
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src='images/teamInfo/blue.png'
                                            alt="연다은봄"
                                        />
                                        <Carousel.Caption>
                                            <div style={{ height: '100%', marginBottom: '40px' }}>
                                                <p style={{ fontSize: '50px' }}>연다은봄</p>
                                                <p style={{ fontSize: '30px', paddingTop: '40px' }}>강아지가 좋은 백엔드 🐶</p>
                                                <div style={{ padding: '15px 0 40px 0', }}>
                                                    <span className="badge">Node.js</span>
                                                    <span className="badge">Express.js</span>
                                                    <span className="badge">MongoDB</span>
                                                </div>
                                                <div className="sub">
                                                    <span>Email : robin.yeon@gmail.com</span>
                                                    <span>/</span>
                                                    <span><a href="https://github.com/robinyeon">GitHub</a></span>
                                                </div>
                                            </div>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src='images/teamInfo/purple.png'
                                            alt="채은빈"
                                        />
                                        <Carousel.Caption>
                                            <div style={{ height: '100%', marginBottom: '40px' }}>
                                                <p style={{ fontSize: '50px' }}>채은빈</p>
                                                <p style={{ fontSize: '30px', paddingTop: '40px' }}>좋아서 하는 백엔드 🥰</p>
                                                <div style={{ padding: '15px 0 40px 0', }}>
                                                    <span className="badge">Node.js</span>
                                                    <span className="badge">Express.js</span>
                                                    <span className="badge">MongoDB</span>
                                                </div>
                                                <div className="sub">
                                                    <span>Email : alrxltkfkd@gmail.com</span>
                                                    <span>/</span>
                                                    <span><a href="https://github.com/VelyVelyn">GitHub</a></span>
                                                </div>
                                            </div>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </section>
            </TeamInfoLayout>
            <FooterStyle>&copy; 2022 조용할지도</FooterStyle>
        </>
    );
}

export default TeamInfo;