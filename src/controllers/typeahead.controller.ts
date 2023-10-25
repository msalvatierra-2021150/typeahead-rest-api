import { Request, Response } from 'express';
import { pool } from '../database/db-config';

export const getTypeaheadInfo = async (req: Request, res: Response) => {
    try {
      const searchTerm = req.query.searchTerm;

      const [result] = await pool.query(
      `SELECT ZIP_CODE, CITY, COUNTY
      FROM TYPEAHEAD_LOCATIONS
      WHERE
      ZIP_CODE LIKE CONCAT(?, '%') OR
      CITY LIKE CONCAT(?, '%') OR
      COUNTY LIKE CONCAT(?, '%')
      LIMIT 10`, [searchTerm, searchTerm, searchTerm]
      );
      const fetchedInfo = result;
      return res.json({
          msg: "REST-API TYPEAHEAD GET",
          fetchedInfo
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
};