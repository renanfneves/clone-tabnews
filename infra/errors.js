export class InternalServerError extends Error {
  // herda de Error porque o objeto Error padrão possui a stack trace do erro
  constructor({ cause }) {
    super("Um erro interno não esperado aconteceu.", {
      cause,
    });
    this.name = "InternalServerError"; // nome do erro para subscrever o nome padrão "Error"
    this.action = "Entre em contato com o suporte.";
    this.statusCode = 500;
  }

  toJSON() {
    return {
      // retornamos propriedade por propriedade porque o JSON.stringify não serializa corretamente os objetos Error visto que eles possuem propriedades não enumeráveis
      name: this.name,
      message: this.message,
      action: this.action,
      status_code: this.statusCode,
    };
  }
}
