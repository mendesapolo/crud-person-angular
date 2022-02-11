import { Profissao } from "./Profissao";

export class Pessoa {
    public id: number = 0
    public nome: string = '';
    public telefone: string = '';
    public email: string = '';
    public is_deleted: boolean = false;
    public profissao: Profissao = new Profissao()
    public created_at: Date = new Date()
    public updated_at: Date = new Date()
}
