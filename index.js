const webfont = require("webfont");
const axios = require("axios");
const project = require("./config/projectInfo.js");

const GetSVG = {

    apiRoot: 'https://api.figma.com/v1',

    axios: axios.create({
        baseURL: this.apiRoot,
        headers: {"Content-Type": "application/json", "x-figma-token": project.projectToken,}
    }),

    fileURL(){
        return `/files/${project.fileID}`;
    },

    requestFigmaFile(){
        this.axios.get(this.fileURL())
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            });
    }
}

GetSVG.requestFigmaFile();

module.exports = GetSVG; 

