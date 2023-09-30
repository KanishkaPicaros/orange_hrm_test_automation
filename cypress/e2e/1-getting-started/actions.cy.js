

import { actions } from "../../support/pageObjects/actions"

const action= new actions();
describe("This is actions testing",()=>{

    beforeEach("load site",()=>{
        cy.fixture("/actionData").as("data")
        cy.visit("/commands/actions")

    })


    it("type action",()=>{
        cy.get("@data").then(($data)=>{
            action.getEmail().type($data.emailId)
            cy.get('#password1').type("pwd123")
            cy.get('#password1').type("{del}{selectall}{}backspace")
            cy.get('#password1').type("{shift}"+"pwd123",{force:true})

        })
        
    })

    it("Clear",()=>{
        cy.get('#description').type("Clear this text from input").clear();
    })

    it("Submit from.",()=>{
        cy.get('.action-form').submit()
    })

    it("Double click",()=>{
        cy.get('.form-group > .action-div').dblclick()
    })
})