/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";

import {
  IsString,
  IsDate,
  IsInt,
  Min,
  Max,
  IsOptional,
  MaxLength,
  IsNumber,
  IsBoolean,
  ValidateNested,
} from "class-validator";

import { Type } from "class-transformer";
import { Reservation } from "../../reservation/base/Reservation";
import { RoomService } from "../../roomService/base/RoomService";

@ObjectType()
class Room {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  roomNumber!: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  typeField!: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  pricePerNight!: number | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  availability!: boolean | null;

  @ApiProperty({
    required: false,
    type: () => [Reservation],
  })
  @ValidateNested()
  @Type(() => Reservation)
  @IsOptional()
  reservations?: Array<Reservation>;

  @ApiProperty({
    required: false,
    type: () => [RoomService],
  })
  @ValidateNested()
  @Type(() => RoomService)
  @IsOptional()
  roomServices?: Array<RoomService>;
}

export { Room as Room };