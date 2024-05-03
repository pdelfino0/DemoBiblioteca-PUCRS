import { Bind, Controller, Query, Get } from '@nestjs/common';

@Controller('Biblioteca')
export class AppController {
  var;
  #acervo = [];

  constructor() {
    this.#acervo = [
      {
        id: 1, titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien',
      },
      {
        id: 2, titulo: 'Harry Potter e a Pedra Filosofal', autor: 'J.K. Rowling',
      },
      {
        id: 3, titulo: '1984', autor: 'George Orwell',
      },
      {
        id: 4, titulo: 'Orgulho e Preconceito', autor: 'Jane Austen',
      },
      {
        id: 5, titulo: 'O Grande Gatsby', autor: 'F. Scott Fitzgerald',
      },
      {
        id: 6, titulo: 'Cem Anos de Solidão', autor: 'Gabriel García Márquez',
      },
      {
        id: 7, titulo: 'A Guerra dos Tronos', autor: 'George R.R. Martin',
      },
    ];
  }

  @Get() getHello() {
    return 'Bem-vindo à Biblioteca!';
  }

  @Get('livros') getAcervo() {
    return this.#acervo;
  }


  @Get('livrosAutor')
  @Bind(Query())
  getLivroAutor(query) {
    var resp = [];
    this.#acervo.forEach((livro) => {
      if (livro.autor === query.autor) {
        resp.push(livro);
      }
    });
    return resp;
  }
}