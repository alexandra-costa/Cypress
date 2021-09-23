/// <reference types="cypress" />
describe('User Alexandra', () => {

    it('should be able to navigate on the home page and subscribe on the Arcade website', () => {
        cy.visit('http://127.0.0.1:5500/index.html');
        cy.get('[id=home]').click();
        cy.get('[id=busca]').type('Street Fighter').clear();
        cy.get('[id=contact]').click();
        cy.get('[id=name1]').type('Alexandra Araujo da Costa');
        cy.get('[id=email1]').type('alexandra@startaideia.com.br');
        cy.get('[id=tel1]').type('986213464');
        cy.get('[id=select1]').select('PacMan');
        cy.get('[id=texto1]').type('Gosto muito de jogos Arcade.');
        //alexandra didn't want to subscribe on the Arcade website, so she closed the form
        cy.get('[id=closeImage]').click();
        cy.get('[id=btn]').click();
        cy.get('[id=btn]').click();

    });

});

describe('User Kayane', () => {

    it('should be able to navigate on the home page and subscribe on the Arcade website', () => {
        cy.visit('http://127.0.0.1:5500/index.html');
        cy.get('[id=home]').click();
        cy.get('[id=busca]').type('Street Fighter').clear();
        cy.get('[id=btn]').click();
        cy.get('[id=btn]').click();
        cy.get('[id=contact]').click();
        cy.get('[id=name1]').type('Kay');
        cy.get('[id=email1]').type('kayane@startaideia.com.br');
        cy.get('[id=tel1]').type('999999999');
        cy.get('[id=select1]').select('streetFighter');
        cy.get('[id=texto1]').type('Gosto muito de jogos Arcade, principalmente de Street Fighter.');
        cy.get('[id=button1]').click();
        cy.get('[id=homeContact]').click();
    });

});

describe('User Vagner', () => {

    it('should be able to navigate on the home page and subscribe on the Arcade website', () => {
        cy.visit('http://127.0.0.1:5500/index.html');
        cy.get('[id=home]').click();
        cy.get('[id=busca]').type('Street Fighter').clear();
        cy.get('[id=contact]').click();
        cy.get('[id=name1]').type('Vagner Alves');
        cy.get('[id=email1]').type('vagner@startaideia.com.br');
        cy.get('[id=tel1]').type('988888888');
        cy.get('[id=select1]').select('donkeyKong');
        cy.get('[id=texto1]').type('Quando eu era criança, jogava muito Donkey Kong no meu emulador Zsnes');
        cy.get('[id=button1]').click();
        cy.get('[id=homeContact]').click();
        cy.get('[id=btn]').click();
        cy.get('[id=btn]').click();
    });

});

describe('User Luiz', () => {

    it('should be able to navigate on the home page and subscribe on the Arcade website', () => {
        cy.visit('http://127.0.0.1:5500/index.html');
        cy.get('[id=home]').click();
        cy.get('[id=busca]').type('Street Fighter').clear();
        cy.get('[id=contact]').click();
        cy.get('[id=name1]').type('Luiz');
        cy.get('[id=email1]').type('luiz@startaideia.com.br');
        cy.get('[id=tel1]').type('977777777');
        cy.get('[id=select1]').select('pinball');
        cy.get('[id=texto1]').type('Gosto muito de jogos Arcade, principalmente pinball');
        cy.get('[id=button1]').click();
    });

});

describe('User Matheus', () => {

    it('should be able to navigate on the home page and subscribe on the Arcade website', () => {
        cy.visit('http://127.0.0.1:5500/index.html');
        cy.get('[id=home]').click();
        cy.get('[id=busca]').type('Street Fighter').clear();
        cy.get('[id=contact]').click();
        cy.get('[id=name1]').type('Matheus');
        cy.get('[id=email1]').type('matheus@startaideia.com.br');
        cy.get('[id=tel1]').type('966666666');
        cy.get('[id=select1]').select('marvelVsCapcom');
        cy.get('[id=texto1]').type('Gosto muito de jogos Arcade, principalmente Marvel vs Capcom.');
        cy.get('[id=button1]').click();
        cy.get('[id=homeContact]').click();
    });

});