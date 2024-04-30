import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesService } from './courses/courses.service';
import { CoursesController } from './courses/courses.controller';
import { StudentModule } from './student/student.module';
import { CoursesModule } from './courses/courses.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './users/users.guards';

@Module({
  imports: [StudentModule,
     CoursesModule,
      MongooseModule.forRoot(`mongodb://localhost:27017/ui`),
       UsersModule,
       JwtModule.register({secret:'secret' ,signOptions:{expiresIn:'1d'}})
  ],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    }
  ],
})
export class AppModule { }
