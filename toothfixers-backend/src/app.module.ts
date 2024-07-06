import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientsModule } from './patients/patients.module';
import { Patient } from './patients/patient.entity';
import { PatientsModule } from './patients/patients.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'faruqolami',
      database: 'clinic_db',
      entities: [Patient],
      synchronize: true, // Don't use synchronize in production
    }),
    PatientsModule,
  ],
})
export class AppModule {}
