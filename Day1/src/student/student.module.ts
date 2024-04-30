import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { studentSchema } from './student.schema';

@Module(
  {
    imports: [ 
      MongooseModule.forFeature( [{
      name: `students`,
      schema: studentSchema
      }] ) 
      ],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
