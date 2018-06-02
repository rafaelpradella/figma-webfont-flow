const expect = require("chai").expect;
var assert = require('chai').assert;
const request = require("request");
const _self = require("../index.js");

describe('Request Figma Project', () => {
    
    it('should exist _self', () => {
        expect(_self).to.exist;    
    });

    it('_self.fileURL() should be a string', () => {
        expect(_self.fileURL).to.be.string;
    });

    it('You are connected right now', () => {
        let isConnected = null;
        require('dns').resolve('www.google.com', (err) => {
            if(!err) isConnected == true;
            expect(isConnected).to.be.true;
        })
    });
    
    it('Request _self.getURL() content and it´s status is OK', () => {
        _self.axios.get(_self.fileURL())
            .then((response) => {
                expect(response.status).is.equal.to("200");
            })
            .catch((error) => {
                assert.fail(error);
            });
    });
});