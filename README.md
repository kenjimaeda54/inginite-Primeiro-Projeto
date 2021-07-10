# inginite-Primeiro-Projeto


# inginite-Primeiro-Projeto
Primeiro projeto do Igniter,foi util para reforçar alguns conceitos 

  
 
## Tabelas de conteudos 
* Visão geral
  * <a href='#Desafio' >  Desafio </a>
  * <a href='#Construção' >  Construção </a>   
  * <a href='#o-que-eu-aprendi' >  Aprendizado </a>
  * <a href='#Feature' >  Feature </a>
  * <a href='#Dependencias'> Dependencias </a>

## Visão Geral
## Desafio
- Criar uma aplicação de listagem das skills

## Construção
 ![VSCode](https://img.shields.io/badge/-VSCode-0085D1?style=flat-square&logo=visual-studio-code&logoColor=white)
![Git](https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white)
![React Native](https://img.shields.io/badge/-reactnative-212121?style=flat-square&logo=reactnative&logoColor=white)
![typescript](https://img.shields.io/badge/-typescript-EFD81D?style=flat-square&logo=typescript&logoColor=black)
  

## O que eu aprendi
 Fortaleci alguns conhecimentos gerais,como uso do useEfect,useState,função 


Maneira de realizar exclusao de item em um objeto é usando filter. Ideia e retornar apenas os itens que desejo no objeto.

```typescript
  const handleRemoveSkill = (id: string) => {
    setListSkill((oldState) => oldState.filter((skill) => skill.id !== id));
    /*cuido com arrow function, se usar anotação de objeto{} precisa do return
      se nao usar tudo bem bem,exemplo (oldState)=> {return sua lógica}  */
  };
  
 ```

 # Feature
  - Hooks
  - styled component
  - Atomics
  - Media Screen
  - Tipagem
 



