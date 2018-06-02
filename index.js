const webfont = require("webfont");
const request = require("request");
const project = require("./config/projectInfo.js");
const apiRoot = 'https://api.figma.com/v1';


const GetSVGFiles = {

    projectURL(){
        return `${apiRoot}/projects/:${project.projectToken}`;
    },

    requestFigmaProject(){
        request( this.projectURL(), (err, resp) => {
            console.log(resp.statusCode);
        });
    }
}

module.exports = GetSVGFiles; 

