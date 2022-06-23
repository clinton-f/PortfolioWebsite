import React from 'react';
import {ProfileImg} from './AboutElements';
import Picture from '../../images/Picture.jpg'
const commands = {
    whois: [
        <text className='Grid' style={{marginTop: '10px'}}>
        <ProfileImg className="PicContainer" style={{marginTop: '10px', marginRight: '7px',background: 'none', opacity: '45%'}} > <img src={Picture} width="250vw" alt="My Profile Pic" className="profilePic"/> </ProfileImg>
        <p className="PicText" style={{marginTop: '7px', marginRight: '20px', marginBottom: '10px'}}>
        Hi there 👋😄 I'm Clinton,<br></br> 
        a software engineer and developer who loves creating applications and solving 
        problems with a lateral thinking perspective. I've always had the desire for 
        creating things since I can remember, in the past programed video games, 
        built websites, created apps, joined and competed in game jams and hackathons 
        which some I was a winner🏆 of, but decided to go to school and learn the 
        discipline when I had a conversation with my brother about the endless 
        possibilities of what you can create with code. So I decided to go to 
        Fitchburg State University where I went for a game design minor and a 
        bachelor's in computer science.</p>
        </text> 
    ],

    education: [
        <text> 
        <br></br>
        <br></br>
        <p><h4>EDUCATION:</h4></p>
        <p>--------------------------------------------</p>
        <p>Fitchburg State Univercity in Fitchburg, Ma.</p>
        <p>○ Bachelor of Computer Science</p>
        <p>○ Game Design Minor</p>
        <br></br>
        </text>
    ],

    recent: [
        <text> 
        <br></br>
        <br></br>
        <p><h4>MOST RECENT:</h4></p>
        <br></br>
        <p><ul><li>Community Site:</li>   <nbsp></nbsp>   <li>Crypto Tracker:</li>   <nbsp></nbsp>   <li>Data Analysis:</li></ul></p>
        <p><ul><li>○ Angular</li>   <nbsp></nbsp>  <li>○ REACT</li>   <nbsp></nbsp>  <li>○ Streamlit</li></ul></p>
        <p><ul><li>○ Express.js</li>   <nbsp></nbsp>  <li>○ JavaScript</li>  <nbsp></nbsp>  <li>○ Python</li></ul></p>
        <p><ul><li>○ Mongo.DB</li>   <nbsp></nbsp>  <li>○ Mongoose</li>  <nbsp></nbsp>  <li>○ Excel</li></ul></p>
        <p><ul><li>○ TypeScript</li>   <nbsp></nbsp>  <li>○ CoinGecko API</li>  <nbsp></nbsp>  <li>And more...</li></ul></p>
        <p><ul><li>○ JavaScript</li>  <nbsp></nbsp>  <li>And more...</li></ul></p>
        <p><ul><li>○ Node.js</li></ul></p>
        <p><ul><li>○ JWT</li></ul></p>
        <p><ul><li>○ NPM</li></ul></p>
        <p><ul><li>And more...</li></ul></p>
        <br></br>
        </text>
    ],

    social: [
        <text> 
        <br></br>
        <br></br>
        <p><h4>SOCIAL NETWORKS:</h4></p>
        <br></br>
        <p>linkedin: <nbsp></nbsp>---------<nbsp></nbsp> <a className="pointer" onClick={()=> window.open("https://linkedin.com/in/clinton-f", "_blank")}>linkedin/clinton</a></p>
        <p>github: <nbsp></nbsp>---------<nbsp></nbsp> <a className="pointer" onClick={()=> window.open("https://github.com/clinton-f", "_blank")}>github/clinton</a></p>
        <p>codepen: <nbsp></nbsp>---------<nbsp></nbsp> <a className="pointer" onClick={()=> window.open("https://codepen.io/clintonf7", "_blank")}>codepen/clinton</a></p>
        <p>codesandbox: <nbsp></nbsp>---------<nbsp></nbsp> <a className="pointer" onClick={()=> window.open("https://codesandbox.io/s/clinton-f", "_blank")}>codesandbox/clinton</a></p>
        <br></br>
        <br></br>
        </text>
    ],

    soft: [
        <text> 
        <br></br>
        <br></br>
        <p><h4>SOFT SKILLS:</h4></p>
        <br></br>
        <p><ul><li>Time Management</li>   <nbsp></nbsp><nbsp></nbsp>  <li>Creative Thinker</li>   <nbsp></nbsp>  <li>Leadership</li></ul></p>
        <p><ul><li>Communication</li>   <nbsp></nbsp>  <li>Self Motivated</li>  <nbsp></nbsp>  <li>Fast Learner</li></ul></p>
        <p><ul><li>Team Player</li>   <nbsp></nbsp>  <li>Emphathetic</li>  <nbsp></nbsp>  <li>Adaptable</li></ul></p>
        <br></br>
        </text>
    ],

    resume: [
        <text> 
        <br></br>
        <br></br>
        <p>Resume: <nbsp></nbsp>--------<nbsp></nbsp> <a onClick={()=> window.open("https://codepen.io/pen/", "_blank")}>👉📃</a></p>
        <br></br>
        <br></br>
        </text>
    ],

    help: [
        <text>
        <br></br>
        <br></br>
        <p><h4>Available commands:</h4></p>
        <br></br>
        <p>whois   --------   Who is Clinton?</p>
        <p>education   --------   What is his formal education?</p>
        <p>soft   --------   What are his soft skills?</p>
        <p>social   --------   Display social networks.</p>
        <p>recent   --------   Technologies he has been working with recently.</p>
        {/* <p>clear   --------   Clear the screen.</p> 
        <p>history   --------   View past entered commands.</p>*/}
        <p>help   --------   Display terminal available commands.</p>
        <br></br>
        <br></br>
        </text>
    ],

//     hist: {
// },
      

//         </p>
//         </text>]
        

}
const history = [];
// Custom hook to handle terminal commands
const UseOnEnter = () => {
    // Array and Methods to to update the terminal array, to keep track of what the user enters into the console
    const [consoleOutput, updateConsoleOutput] = React.useState([]);

    const onEnter = (value, key) => {
        // If the user enters a command, then add it to the consoleOutput array
        if (key === "Enter") {
            const newConsoleLine = commands[value] || "Invalid command, please try again or use the help command.";
            history.push(value + "\n");
            return updateConsoleOutput(
                consoleOutput.concat(newConsoleLine)
            );
        }
        // else if (key === "Enter" && value === "clear") {
        //     return updateConsoleOutput (
        //         consoleOutput.concat("")
        //     )
        // }
    };


    return [consoleOutput, onEnter];
};

export default UseOnEnter;