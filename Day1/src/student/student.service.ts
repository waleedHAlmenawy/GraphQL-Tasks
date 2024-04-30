import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class StudentService {
  constructor(@InjectModel(`students`) private student){}
  async create(createStudentDto: CreateStudentDto) {
    return  await this.student.create(createStudentDto)
  }

  findAll() {
    return this.student.find();
  }

  findOne(id: number) {
    return this.student.findOne({_id:id});
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
