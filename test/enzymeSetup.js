import { JSDOM } from 'jsdom';
import { expect } from 'chai';

const doc = (new JSDOM('<!doctype html><html><body></body></html>')).window;

global.document = doc.document;
global.window = doc.defaultView;

// http://airbnb.io/enzyme/docs/guides/jsdom.html
global.navigator = {
    userAgent: 'node.js'
};

global.localStorage = {};

global.expect = expect;

