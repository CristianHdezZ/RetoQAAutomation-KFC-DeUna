class KfcPage{
    elemenst = {
        menubar: () => cy.get('[data-rs-event-name="Select Menu"] > a > span'),
        subMenuOption: () => cy.get(":nth-child(6) > .nav-link"),
        productCard: () => cy.get('#product_173 > .card > .h-100 > .card-body > .mt-auto'),
        addToCarButton: () => cy.get("#add-to-cart-button > div"),       
        modalDialog: () => cy.get("#add-to-cart-modal > div > div",{ timeout: 10000 }),
        AddPopCornFamily:()=>cy.get('#inside-product-cart-form > div:nth-child(4) > div:nth-child(3) > div:nth-child(1) > div > div:nth-child(2) > div.d-flex.quantity-select.quantity-select-related-product.mt-1 > button.border-0.flex-grow-0.flex-shrink-0.py-0.px-3.quantity-select-related-product-increase', { timeout: 10000 }).eq(0),

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
    }

    addToCarClick(){     
        this.elemenst.modalDialog().should("be.visible")
        this.elemenst.AddPopCornFamily().click({ force: true })   
        this.elemenst.addToCarButton().click({ force: true }); 
    }
    
}
export const kfcPage = new KfcPage();