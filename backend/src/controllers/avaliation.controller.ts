import { Request, Response, NextFunction } from 'express';
import AvaliationService from '../services/avaliation.service';
import StatusCode from '../utils/StatusCode';

export default class MatchController {
    private avaliationService: AvaliationService;

    constructor() {
        this.avaliationService = new AvaliationService();
    }

    public getAvaliations = async (_req: Request, res: Response) => {
        const result = await this.avaliationService.getAvaliations();
        return res.status(StatusCode.OK).json(result);
    };

    public newAvaliation= async (req: Request, res: Response) => {
        const result = await this.avaliationService.newAvaliation(req.body);

        if (result) {
            return res.status(StatusCode.CREATED).json(result);

        } else {
            return res.status(StatusCode.BAD_REQUEST).json({ message: 'Erro ao criar a avaliação' });
        }
    };

    public deleteAvaliation = async (req: Request, res: Response) => {
        const { id } = req.params;

        const result = await this.avaliationService.deleteAvaliation(+id);

        if (result === 1) {
            return res.status(StatusCode.OK).json({ message: 'Avaliação deletada com sucesso.' });
        } else {
            return res.status(StatusCode.NOT_FOUND).json({ message: 'Erro ao deletar a avaliação' });
        }
    };
}