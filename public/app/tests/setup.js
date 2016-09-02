import React from 'react'
import chaiEnzyme from 'chai-enzyme'
import jsdom from 'jsdom'
import chai, { expect } from 'chai'

chai.use(chaiEnzyme())

const doc = jsdom.jsdom('<!doctype html><html><head><body></body>></head></html>')
const win = doc.defaultView

global.document = doc
global.window = win

Object.keys(window).forEach((key)=>{
	if (!(key in global)) {
        global[key] = window[key]
	}
})
global.React = React
global.expect = expect