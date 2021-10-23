import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";


/**
 * Receber code(string)
 * Recuperar o access_token no github
 * Recuperar infos do user no github
 * Verificar se o usuario existe no DB
 * ---- SIM = Gera um token
 * ---- NAO = Cria no DB, gera um token
 * Retornar o token com as infos do user
 */

class AuthenticateUSerController {
  async handle(request: Request, response: Response) {
    const { code } = request.body;

    const service = new AuthenticateUserService();
    try {
      const result = await service.execute(code)
      return response.json(result);
    } catch(err) {
      return response.json({ error: err.message });
    }
  }
}

export { AuthenticateUSerController }