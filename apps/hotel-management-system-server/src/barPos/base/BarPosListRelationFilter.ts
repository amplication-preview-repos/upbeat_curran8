/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BarPosWhereInput } from "./BarPosWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class BarPosListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => BarPosWhereInput,
  })
  @ValidateNested()
  @Type(() => BarPosWhereInput)
  @IsOptional()
  @Field(() => BarPosWhereInput, {
    nullable: true,
  })
  every?: BarPosWhereInput;

  @ApiProperty({
    required: false,
    type: () => BarPosWhereInput,
  })
  @ValidateNested()
  @Type(() => BarPosWhereInput)
  @IsOptional()
  @Field(() => BarPosWhereInput, {
    nullable: true,
  })
  some?: BarPosWhereInput;

  @ApiProperty({
    required: false,
    type: () => BarPosWhereInput,
  })
  @ValidateNested()
  @Type(() => BarPosWhereInput)
  @IsOptional()
  @Field(() => BarPosWhereInput, {
    nullable: true,
  })
  none?: BarPosWhereInput;
}
export { BarPosListRelationFilter as BarPosListRelationFilter };
