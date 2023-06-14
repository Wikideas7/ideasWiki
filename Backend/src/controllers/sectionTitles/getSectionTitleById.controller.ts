import { Request, Response } from 'express';
import { getSectionTitleByIdService } from '../../services/sectionsTitles/getSectionTitleById.service';

export const getSectionTitleByIdController = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const sectionTitleRetrieved = await getSectionTitleByIdService(id);
        res.status(200).json({
            section: sectionTitleRetrieved
        })
    } catch (error: any) {
        res.status(500).json({ error: `${error.message}` });
    }
} 