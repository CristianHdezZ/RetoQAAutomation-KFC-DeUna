class KfcPage{
    elemenst = {
        menubar: () => cy.get('[data-rs-event-name="Select Menu"] > a > span'),
        subMenuOption: () => cy.get(":nth-child(6) > .nav-link"),
        productCard: () => cy.get('#nav-bar-spy-scroll > .nav-pills > .nav-item:nth-child(6) > .nav-link > .rounded-circle'),        
        addToCarButton: () => cy.get("#add-to-cart-button > div"),               
        AddPopCornFamily:()=>cy.get('.complement-group-select:nth-child(1) > .group-divider > .d-flex:nth-child(2) > .d-flex > .border-0:nth-child(3)'),                                  
        product_preview:()=>cy.visit('/product_preview/combo-pop-corn-87'),
        };

    menubarClick(){
        this.elemenst.menubar().click()
    }
    productClick(){
        this.elemenst.productCard().click()
    }
    selectProduct(){
        this.elemenst.menubar().click()
        this.elemenst.subMenuOption().click()
        this.elemenst.productCard().click()       
        cy.visit('https://www.kfc.co/products/combo-pop-corn-87')  
    }
    addProductData(){        
        cy.get('.complement-group-select:nth-child(1) > .group-divider > .d-flex:nth-child(2) > .d-flex > .border-0:nth-child(3)').click()
        cy.get('.complement-group-select:nth-child(2) > .group-divider > .d-flex:nth-child(2) > .d-flex > .border-0:nth-child(3)').click()         
    }
    addToCar(){     
        cy.get('#cart-form > #add-to-cart-form > #inside-product-cart-form > .col-12 > #add-to-cart-button').click()
        cy.get('.new-modal-body > .sub-container > .button-container > .justify-content-center > #button-checkout-duna').click()
    }
    
}
export const kfcPage = new KfcPage();