import { Request, Response, NextFunction } from 'express';
import AvaliationService from '../services/avaliation.service';
import StatusCode from '../utils/StatusCodes';

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
        return res.status(StatusCode.CREATED).json(result);
    };

    public deleteAvaliation = async (req: Request, res: Response) => {
        const { id } = req.params;

        const result = await this.avaliationService.deleteAvaliation(+id);
        return res.status(StatusCode.OK).json(result);
    };
}