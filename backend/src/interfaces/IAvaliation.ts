export interface IAvaliation {
    id?: number;
    bimestre: ['PRIMEIRO', 'SEGUNDO', 'TERCEIRO', 'QUARTO'];
    disciplina: ['Biologia', 'Artes', 'Geografia', 'Sociologia'];
    nota: number;
    criadoEm: Date;
    atualizadoEm: Date;
}