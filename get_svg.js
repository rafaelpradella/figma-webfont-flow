const axios = require("axios");
const project = require("./config/projectInfo.js");

const GetSVG = {
    
    file: null,
    
    axios: axios.create({
        baseURL: "https://api.figma.com/v1",
        headers: {"Content-Type": "application/json", "x-figma-token": project.projectToken,}
    }),

    fileURL(){
        return `/files/${project.fileID}`;
    },

    async requestFigmaFile(){
        let response = await this.axios.get(this.fileURL());
        let figmaDocument = response.data.document.children[0].children;

        return figmaDocument;
    }
}

module.exports = GetSVG; 

