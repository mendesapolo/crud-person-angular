import { Pessoa } from './pessoa';
export class Profissao {
    public id: number = 0
    public descricao: string = '';
    public is_deleted: boolean = false;
    public pessoas: Pessoa[] = []

    public created_at: Date = new Date()
    public updated_at: Date = new Date()
}
