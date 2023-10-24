import { Request, Response } from 'express';

export const getTypeaheadInfo = async (req: Request, res: Response) => {
    try {
        
        return res.json({
            msg: "REST-API TYPEAHEAD GET",
            // adminapp,
        });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };