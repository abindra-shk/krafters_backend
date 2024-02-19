import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import dbconfig from './config/database.config';
import { UserModule } from './user/user.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { ConfigModule } from '@nestjs/config';
import { UserdetailsModule } from './userdetails/userdetails.module';
import { CategoryModule } from './category/category.module';
import { ImageModule } from './image/image.module';
import { BatchModule } from './batch/batch.module';
import { CourseModule } from './course/course.module';
import { AddressModule } from './address/address.module';
import { ExperienceModule } from './experience/experience.module';
import { EducationModule } from './education/education.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        type: 'postgres',
        host: '110.44.123.230',
        port: 5432,
        username: 'krafterstech',
        password: 'Krafters@1234',
        database: 'krafterstech',
        // entities: ['../**/*.entity.{ts,js}'],
        synchronize: true,
        autoLoadEntities: true,
      }
    ),
    ConfigModule.forRoot({}),
    UserModule,
    AuthenticationModule,
    UserdetailsModule,
    CategoryModule,
    ImageModule,
    BatchModule,
    CourseModule
    AddressModule,
    ExperienceModule,
    EducationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}




// TypeOrmModule.forRoot(
//   {
//     type: 'postgres',
//     host: 'localhost',
//     port: 5432,
//     username: 'postgres',
//     password: 'minor@1234',
//     database: 'KraftersAcademy',
//     // entities: ['../**/*.entity.{ts,js}'],
//     synchronize: true,
//     autoLoadEntities: true,
//   }
// ),