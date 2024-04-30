import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCourseDto {

    @IsNotEmpty()
@IsString()
name: string;

@IsNotEmpty()
@IsNumber()
age: number;


}
