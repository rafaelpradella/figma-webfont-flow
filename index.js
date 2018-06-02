const webfont = require("webfont");
const axios = require("axios");
const project = require("./config/projectInfo.js");
const apiRoot = 'https://api.figma.com/v1';


const GetSVGFiles = {

    axios: axios.create({
        baseURL: apiRoot,
        timeout: 1000,
        headers: {"Content-Type": "application/json", "x-figma-token": project.projectToken,}
    }),

    fileURL(){
        return `/files/${project.fileID}`;
    },

    requestFigmaFile(){
        this.axios.get(this.fileURL)
            .then(function(response) {
                console.log(response.status);
        });
    }
}

GetSVGFiles.requestFigmaFile();

module.exports = GetSVGFiles; 

