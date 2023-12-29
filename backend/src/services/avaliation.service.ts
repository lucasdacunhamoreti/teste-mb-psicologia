import AvaliationModel from '../models/avaliation.model';

export default class AvaliationService {
    private avaliationModel: AvaliationModel;

    constructor() {
        this.avaliationModel = new AvaliationModel();
    }

    public getAvaliations = async () => {
        const avaliations = await this.avaliationModel.getAvaliations();
        return avaliations;
    };

    public newAvaliation = async (body: any) => {
        const insertedAvaliation = await this.avaliationModel.newAvaliation(body);
        return insertedAvaliation;
    };

    public deleteAvaliation = async (id: number) => {
        const matchChanged = await this.avaliationModel.deleteAvaliation(id);
        return matchChanged;
    };
}