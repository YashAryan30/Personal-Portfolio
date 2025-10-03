import meter1 from "../assets/img/MLmodel.png";
import meter2 from "../assets/img/htmlicon.png";
import meter3 from "../assets/img/cssicon.png";
import meter4 from "../assets/img/javascripticon.png";
import meter5 from "../assets/img/reactIcon.png";
import meter6 from "../assets/img/expressIcon.png";
import meter7 from "../assets/img/nodeJSicon.png";
import meter8 from "../assets/img/mongoDBicon.png";
import meter9 from "../assets/img/awsicon.png";
import meter10 from "../assets/img/figmaIcon.png";
import meter11 from "../assets/img/excelIcon.png";
import meter12 from "../assets/img/powerpointIcon.png";
import meter13 from "../assets/img/jupytericon.png";
import meter14 from "../assets/img/computervisionIcon.png";
import meter15 from "../assets/img/JiraIcon.png";
import meter16 from "../assets/img/java.png";
import meter17 from "../assets/img/pythonicon.png";
import meter18 from "../assets/img/SQLicon.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container" backgroundimage="url('src/assets/img/projBG.png')">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2 style={{ marginBottom: '1rem', marginTop: '-1rem' }}>Skills</h2>
                        {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p> */}
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={meter6} alt="Image" />
                                <h5>Express JS</h5>
                            </div>
                            <div className="item">
                                <img src={meter7} alt="Image" />
                                <h5>Node JS</h5>
                            </div>
                            <div className="item">
                                <img src={meter8} alt="Image" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={meter9} alt="Image" />
                                <h5>AWS</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Machine Learning</h5>
                            </div>
                            <div className="item">
                                <img src={meter10} alt="Image" />
                                <h5>Figma</h5>
                            </div>
                            <div className="item">
                                <img src={meter11} alt="Image" />
                                <h5>Excel</h5>
                            </div>
                            <div className="item">
                                <img src={meter12} alt="Image" />
                                <h5>Powerpoint</h5>
                            </div>
                            <div className="item">
                                <img src={meter13} alt="Image" />
                                <h5>Jupyter</h5>
                            </div>
                            <div className="item">
                                <img src={meter14} alt="Image" />
                                <h5>Computer Vision</h5>
                            </div>
                            <div className="item">
                                <img src={meter15} alt="Image" />
                                <h5>Jira</h5>
                            </div>
                            <div className="item">
                                <img src={meter16} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={meter17} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={meter18} alt="Image" />
                                <h5>MySQL</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}