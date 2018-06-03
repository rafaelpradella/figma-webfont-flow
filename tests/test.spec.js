const expect = require("chai").expect;
var assert = require('chai').assert;
const getsvg = require("../get_svg.js");

describe('Request Figma Project', () => {
    
    it('should exist getsvg', () => {
        expect(getsvg).to.exist;    
    });

    it('getsvg.fileURL() should be a string', () => {
        expect(getsvg.fileURL).to.be.string;
    });

    it('You are connected right now', () => {
        let isConnected = null;
        require('dns').resolve('www.google.com', (err) => {
            if(!err) isConnected == true;
            expect(isConnected).to.be.true;
        })
    });
    
    it('Request getsvg.requestFigmaFile() content and it´s an object', () => {
        let result = getsvg.requestFigmaFile();
        expect(result).to.be.an('object');
    });
});