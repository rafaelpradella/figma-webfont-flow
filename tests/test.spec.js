const expect = require("chai").expect;
const request = require("request");
const GetSVGFiles = require("../index.js")

describe('Request Figma Project', () => {
    
    it('should exist GetSVGFiles', () => {
        expect(GetSVGFiles).to.exist;    
    });

    it('GetSVGFiles.getURL() should be a string', () => {
        expect(GetSVGFiles.getURL).to.be.string;
    });

    it('You are connected right now', () => {
        let isConnected = null;
        require('dns').resolve('www.google.com', (err) => {
            if(!err) isConnected == true;
            expect(isConnected).to.be.true;
        })
    });
    
    it('Request GetSVGFiles.getURL() content and it´s status is OK', () => {
        let isRequested = null;
        request( GetSVGFiles.projectURL(), function (err, resp) {
            let isRequested = (resp.statusCode == "200" && !err) ? true : false;
            expect(isRequested).to.be.true;
        });
    });
});