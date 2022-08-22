import { plainToClass } from 'class-transformer'
import { validate } from 'class-validator';
import { Request, Response } from 'express'
import { UsageRequest } from '../models/request/usage.request'

export default class UsageController {
  public static getUsage (req: Request, res: Response) {
    res.status(200).json({name: 'DucPV'})
  }

  public static async addUsage (req: Request, res: Response) {
    const user = plainToClass(UsageRequest, req.body);
    const error = await validate(user)
    // console.log(error)
    res.status(200).json({name: error})
  }
}