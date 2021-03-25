import { Request, Response } from "express";
import userService from '../services/user.service';

export const getUserById = async (req: Request, res: Response) => {
  const data = await userService.getUserById(1);
  res.json({
    data: data
  })
}