import '../ComponentCss/Resume.css'
// import dp from '../img/dp.jpg'

export default function Resume(){
    return(
        <div id="header">
        <div id='profile'>
            {/* <img src={dp}></img> */}
        </div>
        <div id='hero-text'>
        <h3>CONTACT</h3>
        <hr className='hrline1'></hr>
        <p>Mehar Enclave, Dehradun</p>
        <p>+91 7367089724</p>
        <p>surajkr97@icloud.com</p>
        <p>shop.surajgupta.tech</p>

        <h3>EDUCATION</h3>
        <hr className='hrline1'></hr>
        <h4>Bachelor of Technology in Computer Science Engineering</h4>
        <p>Tula's Institute, Dehradun</p>
        <p>2020 - 2024</p>

        <h4>Higher Secondary Education</h4>
        <p>Modern Public School, Motihari</p>
        <p>2018 - 2020</p>
        </div>
        </div>
    );
}

export function Resume1(){
    return(
        <div id='name-section'>
            <h1>Suraj Kumar Gupta</h1>
            <h3>A Front-End React Developer From India</h3>
            <p>I am a driven and enthusiastic Computer Science Engineering student with a solid foundation in C and Java. I have honed my skills in ethical hacking, IoT, Figma, and Flutter while pursuing my degree. I am passionate about programming and technology, regularly engaging in coding challenges and hackathons. My expertise in ethical hacking has contributed to my understanding of secure programming practices, and my proficiency in Figma and Flutter has enabled me to design and develop user-friendly applications. I am excited to bring my technical expertise, work ethic, and attention to detail to a challenging and dynamic work environment.</p>
        </div>
    );
}

export function Resume2(){
    return(
        <div id='projects'>
            <h3>Some of my Projects, Achievements are listed below:- </h3>
            <hr className='hrline2'></hr>
            <div id='project-title'>
            <span id='arrow'>☞ </span><h4>Earned 1st Runner-Up in the Code Innovation Series powered by GitHub 2021.</h4>
            </div>
            <p id="project-desc">The Code Innovation Series powered by GitHub is a prestigious global competition that recognizes outstanding software development projects that exhibit innovation, creativity, and technical excellence. As a participant in the 2021 edition of the competition, We presented our project to a panel of judges who evaluated it based on various criteria. Our project stood out as one of the top two projects in the competition, earning us the 1st Runner-Up position. This recognition signifies my exceptional skills, ingenuity, and technical prowess in software development. It is a testament to my hard work, dedication, and commitment to excellence. This achievement also showcases my potential to make a positive impact in the industry and society, and it opens up doors to new opportunities for personal and professional growth. </p>
            <a href='https://surajkr97.hashnode.dev/a-journey-of-learning-and-winning-a-hackathon'>click here to visit my blog and continue reading. 🏆</a>
        </div>
    );
}

export function Resume3(){
    return(
        <div id='projects2'>
            <div id='project-title2'>
            <span id='arrow2'>☞ </span><h4>Hand Gesture Robot Car.</h4>
            </div>
            <p id="project-desc">A hand gesture-controlled robot car that can be controlled through the movement of the hand. we used a band that was worn on the hand and connected to the car via Bluetooth. The band had an accelerometer and gyroscope that detected the movement of the hand and sent signals to the car. This project required a lot of programming and calibration, but the end result was worth it. It was amazing to see the car move in response to the movement of the hand. </p>
            <a href='https://surajkr97.hashnode.dev/exploring-the-world-of-iot-from-robo-cars-to-robo-warrior'>click here to visit my blog and continue reading. 🚗</a>
        </div>
    );
}