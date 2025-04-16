import Produto from "./Produto";

export default interface Categoria {
    id?: number | null;
    nome: string;
    descricao?: Produto[] | null;
}