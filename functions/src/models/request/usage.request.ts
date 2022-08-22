import { ArrayMaxSize, ArrayMinSize, ArrayNotEmpty, IsNotEmpty, IsNotEmptyObject, IsString } from "class-validator";

export class UsageRequest {
  @IsNotEmpty()
  userId: string;

  @IsNotEmpty()
  password: string

  @IsNotEmptyObject()
  company: object

  @ArrayNotEmpty()
  @ArrayMinSize(1)
  @ArrayMaxSize(1)
  @IsString({each: true})
  productIds: string[]


}