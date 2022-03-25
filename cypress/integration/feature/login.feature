Feature: Login

    Acessando o login da Amazon

 Scenario: Efetuando login no site da Amazon
    Given Estou logado no site amazon
    And Clico no efetuar login
    And Informo o email
    And Clico no continuar
    And Informo senha
    And Efetuo login

  