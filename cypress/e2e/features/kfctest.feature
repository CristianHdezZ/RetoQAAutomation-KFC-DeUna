Feature: Compra KFC Colombia

    Compra exitosa por parte de un cliente de KFC Colombia

    Scenario: Compra exitosa
        Given un cliente de KFC con credito disponible e ingrese a la plataforma "https://www.kfc.co/"
        When seleccione el producto deseado
        Then realizara el pago de manera exitosa