import { IAvaliation } from '../interfaces/IAvaliation';
import AvaliationModels from '../database/models/Avaliation';

export default class AvaliationModel {
    private _model: typeof AvaliationModels;

    constructor() {
        this._model = AvaliationModels;
    }

    public async getAvaliations(): Promise<IAvaliation[] | null> {
        const result = await this._model.findAll();
        return result;
    }

    public async newAvaliation(data: IAvaliation): Promise<IAvaliation | null> {
        const { bimestre, disciplina, nota } = data;
        const result = await AvaliationModels.create({
            bimestre,
            disciplina,
            nota,
            criadoEm: new Date(),
            atualizadoEm: new Date(),
        });
        return result;
    }

    public async deleteAvaliation(id: number): Promise<number> {
        const result = await AvaliationModels.destroy({ where: { id } });
        return result;
    }

}