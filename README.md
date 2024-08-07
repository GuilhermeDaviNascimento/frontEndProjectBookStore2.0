Integrantes:

    Guilherme Davi: Desenvolvedor Backend, responsável pelo auxílio no FrontEnd e banco de dados.
    Anthony Sales: Desenvolvedor FrontEnd, responsável pelas telas de login e registro, além de encontrar bugs na aplicação.
    Emanuel Carlos: Desenvolvedor, responsável por criar e popular o banco de dados.
    José Adolfo: Desenvolvedor FrontEnd, responsável pela interface e telas do site.

Perguntas:

1. Com os conhecimentos adquiridos nas aulas de POO, conseguimos modularizar nosso código, o que ajuda na segurança e organização, além de ser essencial para a conexão com nosso banco de dados.

2. Utilizamos o serviço Railway para criar um banco de dados em nuvem e empregamos as variáveis fornecidas por eles para estabelecer uma conexão dentro do arquivo ./bd.js, utilizando o padrão DAO e os conhecimentos de POO.

3. Sim, é possível adicionar o mesmo livro mais de uma vez nos favoritos, lidos e lendo.

4 .
    Guilherme: Foi uma experiência incrível; foi como um teste de todos os conhecimentos adquiridos até agora no curso. A greve foi o meu maior desafio, pois começamos o desenvolvimento antes dela e, ao retornar às aulas, estava completamente perdido em tudo que já havíamos feito.

    Adolfo: Minha experiência foi ótima, trabalhei com meus amigos em equipe, e obtive bastante conhecimento que não tinha.  Minha maior dificuldade foi a falta de tempo, porque meu dia a dia na greve foi bastante corrido, e tive que me desdobrar.

    Anthony: Minha maior dificuldade no projeto foi alinhar minha ideia com a dos outros participantes visto que cada um tinha sua maneira de fazer o código ou resolver algum problema.

    Emanuel: Foi um projeto de bastante aprendizado junto aos meus companheiros, desenvolvemos muito conhecimento durante o desenvolvimento da aplicação.
    A minha maior dificuldade foi trabalhar em equipe, dividindo responsabilidades e compreender o codigo que os meus parceiros estavam a desenvolver.
    Além do mais, nunca tive que lidar com tamanha responsabilidade de um projeto com essa dimensão, que envolvesse três matérias. E isso foi de grande aprendizado e experiência.

Referências:
Dribbble

---

CREATE TABLE `books` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255),
  `author` varchar(255),
  `cape` text,
  `year` int,
  `description` text,
  `primary_color` varchar(255),
  `secound_color` varchar(255),
  `gender` varchar(255),
  `available` tinyint(1),
  `gender_2` varchar(255),
  `reserve` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
) 

CREATE TABLE `borrow` (
  `ID_Emprestimo` bigint unsigned NOT NULL AUTO_INCREMENT,
  `ID_Usuario` bigint unsigned,
  `ID_Livro` int,
  `Data_Emprestimo` date,
  `Data_Devolucao` date,
  `Multa` decimal(5,2),
  PRIMARY KEY (`ID_Emprestimo`),
  FOREIGN KEY (`ID_Usuario`) REFERENCES `users` (`id`),
  FOREIGN KEY (`ID_Livro`) REFERENCES `books` (`id`)
) 

CREATE TABLE `favorite_books` (
  `ID_Serial` bigint unsigned NOT NULL AUTO_INCREMENT,
  `ID_User` bigint unsigned NOT NULL,
  `ID_Book` int NOT NULL,
  PRIMARY KEY (`ID_Serial`),
  FOREIGN KEY (`ID_User`) REFERENCES `users` (`id`),
  FOREIGN KEY (`ID_Book`) REFERENCES `books` (`id`)
)

CREATE TABLE `fines` (
  `ID_USER` bigint unsigned NOT NULL,
  `ID_BOOK` int NOT NULL,
  `PRICE` int NOT NULL,
  PRIMARY KEY (`ID_USER`,`ID_BOOK`),
  FOREIGN KEY (`ID_USER`) REFERENCES `users` (`id`),
  FOREIGN KEY (`ID_BOOK`) REFERENCES `books` (`id`)
)
CREATE TABLE `read_books` (
  `ID_Read` bigint unsigned NOT NULL AUTO_INCREMENT,
  `ID_User` bigint unsigned NOT NULL,
  `ID_Book` int NOT NULL,
  PRIMARY KEY (`ID_Read`),
  FOREIGN KEY (`ID_User`) REFERENCES `users` (`id`),
  FOREIGN KEY (`ID_Book`) REFERENCES `books` (`id`)
)
CREATE TABLE `reading_books` (
  `ID_Reading` bigint unsigned NOT NULL AUTO_INCREMENT,
  `ID_User` bigint unsigned NOT NULL,
  `ID_Book` int NOT NULL,
  PRIMARY KEY (`ID_Reading`),
  FOREIGN KEY (`ID_User`) REFERENCES `users` (`id`),
  FOREIGN KEY (`ID_Book`) REFERENCES `books` (`id`)
) 
CREATE TABLE `reservas` (
  `ID_Reserva` bigint unsigned NOT NULL AUTO_INCREMENT,
  `ID_Usuario` bigint unsigned,
  `ID_Livro` int,
  `Data_Reserva` date,
  PRIMARY KEY (`ID_Reserva`),
  FOREIGN KEY (`ID_Usuario`) REFERENCES `users` (`id`),
  FOREIGN KEY (`ID_Livro`) REFERENCES `books` (`id`)
) 
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `fname` varchar(255),
  `lname` varchar(255),
  `username` varchar(255),
  `email` varchar(255),
  `password` varchar(255),
  `admin` varchar(255) DEFAULT 'no',
  PRIMARY KEY (`id`),
) 