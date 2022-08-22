import { IsArray, IsNotEmpty, IsNotEmptyObject, IsObject, Length } from "class-validator";

export class CompanyRequest {
  @IsNotEmpty()
  code: string;

  @IsObject()
  name?: object

  @IsNotEmptyObject()
  company: object

  @IsArray()
  @Length(1)
  productIds: string[]

  
}