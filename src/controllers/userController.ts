import { Request, Response } from "express"
import { database } from "../database"

export class UserController {

    criarUsuario  (request:Request, response:Response) : Response{
        const {name} = request.body
        
        if(name < 1 ){
            return response.status(403).json({'mensagem':'não é possivel criar mensagem sem um nome'})
        }
        database.push(name);

        return response.status(201).json({'Mensagem': 'Usuario '+ name + ' criado com sucesso'})
    }

    listarUsuario(request:Request ,response : Response){
        return response.status(200).json(database)

}
}
    

