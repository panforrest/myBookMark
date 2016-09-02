

import EntryPreview from '../components/EntryPreview'
import { mount, render, shallow } from 'enzyme'

describe('EntryPreview', ()=>{
   
   const entry = {
   	    title: 'First Entry',
   	    url: 'http://www.google.com'
   }

   it('show entry title', ()=>{
       const component = mount(<EntryPreview entry={entry} />)
       expect(component.find('h3')).to.have.length(1)
       expect(component.find('h3')).to.contain.text()
   })

    it('show entry link', ()=>{
       const component = mount(<EntryPreview entry={entry} />)
       expect(component.find('a')).to.have.attr('href').equal('http://www.google.com')
       expect(component.find('a')).to.have.text('http://www.google.com')
   })

    it('show entry description', ()=>{
       const component = mount(<EntryPreview entry={entry} />)
       expect(component.find('p')).to.have.length(1)
       expect(component.find('p')).to.contain.text('')
   })   


})