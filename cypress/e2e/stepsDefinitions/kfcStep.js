import{
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";
import {kfcPage} from '@pages/KfcPage'

Given("un cliente de KFC con credito disponible e ingrese a la plataforma {string}",(url)=>{
    cy.visit(url);
});

When("seleccione el producto deseado",()=>{
    kfcPage.selectProduct() 
    kfcPage.addProductData()
});

Then("realizara el pago de manera exitosa",()=>{
    kfcPage.addToCar()
    cy.url().should("contains", "/products/combo-pop-corn-87");
})