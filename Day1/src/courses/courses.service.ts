import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CoursesService {

  constructor(@InjectModel(`courses`) private course){}


  create(createCourseDto: CreateCourseDto) {
    const createdCourse = new this.course(createCourseDto);
    return createdCourse.save();

  }

  findAll() {
    return this.course.find()
  }

  async findOne(id: number) {
    return await this.course.findOne({_id:id});
  }

   async update(id: number, updateCourseDto: UpdateCourseDto) {
    return await this.course.updateOne({_id:id},updateCourseDto);
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
