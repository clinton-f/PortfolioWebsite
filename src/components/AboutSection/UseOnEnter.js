import React from 'react';

// var github = "https://github.com/clinton-f"
// var linkedin = "https://www.linkedin.com/in/clinton-f-2656a248/"
// var codepen = "https://codepen.io/clinton-f"
// var codesandbox = "https://codesandbox.io/u/clinton-f"
// var python = "https://www.python.org/"
// var javascript = "https://www.javascript.com/"

const commands = {
    help: 
    <text>  
    whois           Who is Clinton?
    prelife         What he did before software development?
    education       What is his formal education?
    soft            What are his soft skills?
    social          Display social networks.
    projvid         Video desciption of projects he worked on.
    recent          Technologies he has been working with recently.
    clear           Clear the screen.
    history         View past entered commands.
    help            Display terminal available commands.
    </text> ,

    whois: [
        <text>
        <br></br>
        <br></br> 
        <p>SOME IMAGE HERE</p>
        <p>Hey I'm Forrest!👋</p>
        <p>I'm a software developer and content creator, who builds engaging websites like this one</p>
        <p>and makes YouTube videos about computer science & software engineering.</p>
        <p>After graduating with a Bachelor's in Computer Science, I worked professionally</p>
        <p>as a software engineer building enterprise web applications for Fortune 500 companies.</p>
        <p>While doing all of that, I documentned my coding journey on YouTube - trying to enlighten</p>
        <p>the next generation of developers and help them navigate the crazy world that is software</p>
        <p>development & computer science.</p>
        <p>Before I knew it, that online presence took on a life of its own, to the point where I knew</p>
        <p>I needed to make the jump from software engineering to full time content creator, and it's</p>
        <p>the best decision I ever made.</p>
        <p>Now, I make videos about creating cool shit like this terminal website, and hosting my</p>
        <p>podcast 'Decoded w/ Forrest Knight.' What most people don't know, and will only know</p>
        <p>because they're reading this right now, is that I also run a creative & media agency.</p>
        <p>We partner with clients to drive their business outcomes using modern marketing strategies.</p>
        </text> 
    ],

    prelife: [
        "<br>",
        "I'm a software developer and content creator, who builds engaging websites like this one",
        "and makes YouTube videos about computer science & software engineering.",
        "After graduating with a Bachelor's in Computer Science, I worked professionally",
        "as a software engineer building enterprise web applications for Fortune 500 companies.",
        "While doing all of that, I documentned my coding journey on YouTube - trying to enlighten",
        "the next generation of developers and help them navigate the crazy world that is software",
        "development & computer science.",
        "<br>"
    ],

    education: [
        "<br>",
        "<b><h2>FORMAL EDUCATION</h2></b>",
        "<b><h3>DEGREE:</h3></b>",
        "Bachelor's in Computer Science",
        "Associate of Science in Game Design and Development",
        "<br>",
    ],

    soft: [
        "<br>",
        "<b><h2>SOFT SKILLS</h2></b>",
        "<li>Good communication skills</li>",
        "<li>Good lateral problem-solving skills</li>",
        "<li>Good team-work skills</li>",
        "<li>Good time management skills</li>",
        "<li>Good Leadership skills</li>",
        "<br>",
    ],

    social: [
        "<br>",
        "<b><h2>SOCIAL NETWORKS</h2></b>",
       // '<b>GITHUB:</b> <a href="' + github + '" target="_blank">github/clinton' + "</a>",
       // '<b>LINKEDIN:</b> <a href="' + linkedin + '" target="_blank">linkedin/clinton' + "</a>",
     //   '<b>CODEPEN:</b> <a href="' + codepen + '" target="_blank">codepen/clinton' + "</a>",
      //  '<b>CODESANDBOX:</b> <a href="' + codesandbox + '" target="_blank">codesandbox/clinton' + "</a>",
        "<br>",
    ],

    projvid: [
        "<br>",
        "<b><h2>DOCUMENTED PROJECTS</h2></b>",
      //  '<b>PYTHON:</b> <a href="' + python + '" target="_blank">python/prefab' + "</a>",
      //  '<b>JAVASCRIPT:</b> <a href="' + javascript + '" target="_blank">javascript/prefab' + "</a>",
      //  '<b>NODE.js:</b> <a href="' + node.js + '" target="_blank">node.js/prefab' + "</a>",
        "<br>",
    ],

    recent: [
        "recent",
        <text> 
        <br></br>
        <br></br>
        <p><h3>MOST RECENT:</h3></p>
        <p><b>Community Site:   <nbsp></nbsp>   Crypto Tracker:   <nbsp></nbsp>   Data Analysis:</b></p>
        <p><li>Angular</li>             <li>REACT</li>              <li>Streamlit</li></p>
        <p><li>Express.js</li>          <li>JavaScript</li>         <li>Python</li></p>
        <p><li>Mongo.DB</li>            <li>Mongoose</li>           <li>And more...</li></p>
        <p><li>TypeScript</li>          <li>CoinGecko API</li></p>
        <p><li>JavaScript</li>          <li>And more...</li></p>
        <p><li>Node.js</li></p>
        <p><li>JWT</li></p>
        <p><li>NPM</li></p>
        <p><li>And more...</li></p>
        </text>
    ],

    help: [
        <text>
        <br></br>
        <br></br>
        <p>Available commands:</p>
        <br></br>
        <p>whois        Who is Clinton?</p>
        <p>prelife      What he did before software development?</p>
        <p>education    What is his formal education?</p>
        <p>soft         What are his soft skills?</p>
        <p>social       Display social networks.</p>
        <p>projvid      Video desciption of projects he worked on.</p>
        <p>recent       Technologies he has been working with recently.</p>
        <p>clear        Clear the screen.</p>
        <p>history      View past entered commands.</p>
        <p>help         Display terminal available commands.</p>
        <br></br>
        </text>
    ],

    hist: {
},

    clr: [<text>
        <p>
            

        </p>
        </text>]
        

}
const history = [];
// Custom hook to handle terminal commands
const UseOnEnter = () => {
    // Array and Methods to to update the terminal array, to keep track of what the user enters into the console
    const [consoleOutput, updateConsoleOutput] = React.useState([]);

    const onEnter = (value, key) => {
        // If the user enters a command, then add it to the consoleOutput array
        if (key === "Enter") {
            const newConsoleLine = commands[value] || "Command not found, please type help for a list of available commands.";
            history.push(commands.value + "\n");
            return updateConsoleOutput(
                consoleOutput.concat(newConsoleLine)
            );
            
        }
        // else if (key === "Enter" && value === "hist") {
        //     history.map((item) => {
        //         return <li>{console.log(item.value)}</li>

        //     }
        //     )
        // }
        else if (key === "space") {
            return updateConsoleOutput([]);
        }
    };


    return [consoleOutput, onEnter];
};

export default UseOnEnter;