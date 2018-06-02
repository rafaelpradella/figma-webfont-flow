const expect = require("chai").expect;
const GetSVGFiles = require("../index.js")

describe('Request Figma Project', () => {
    it('should exist GetSVGFiles', () => {
        expect(GetSVGFiles).to.exist;    
    });
});