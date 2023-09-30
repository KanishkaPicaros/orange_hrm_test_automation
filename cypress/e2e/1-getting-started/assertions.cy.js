describe("This is assertions",()=>{
    beforeEach(()=>{
        cy.visit("/commands/assertions")
    })
    
    it("Implicit wait",()=>{
        cy.get(".table.table-bordered.assertion-table").find("tbody tr:last").should("have.class","success")
    })
})