/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RestaurantPosWhereInput } from "./RestaurantPosWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { RestaurantPosOrderByInput } from "./RestaurantPosOrderByInput";

@ArgsType()
class RestaurantPosFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => RestaurantPosWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => RestaurantPosWhereInput, { nullable: true })
  @Type(() => RestaurantPosWhereInput)
  where?: RestaurantPosWhereInput;

  @ApiProperty({
    required: false,
    type: [RestaurantPosOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [RestaurantPosOrderByInput], { nullable: true })
  @Type(() => RestaurantPosOrderByInput)
  orderBy?: Array<RestaurantPosOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { RestaurantPosFindManyArgs as RestaurantPosFindManyArgs };