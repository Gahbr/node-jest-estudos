import { Request } from "express";
import { makeMockResponse } from "../mocks/mockResponse";
import { UserController } from "./userController"

describe('User controller', ()=>{
    const userController = new UserController();
    const mockRequest = {} as Request
    const mockResponse = makeMockResponse();

    it('deve listar os nossos usuários', ()=>{
        userController.listarUsuario(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(200);
        expect(mockResponse.state.json).toHaveLength(2);

    })

    it('Deve criar um novo usuário', ()=>{
        mockRequest.body = {
            name: 'Novo usuário'
        }
        userController.criarUsuario(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(201);
        expect(mockResponse.state.json).toMatchObject({'Mensagem': 'Usuario Novo usuário criado com sucesso'})
    })

    it('Não deve criar um usuário com nome em branco',()=>{
        mockRequest.body = {
            name:''
        }

        userController.criarUsuario(mockRequest,mockResponse);
        expect(mockResponse.state.status).toBe(403);
        expect(mockResponse.state.json).toMatchObject({'mensagem':'não é possivel criar mensagem sem um nome'})
    })
})