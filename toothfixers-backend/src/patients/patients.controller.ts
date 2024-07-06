import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { Patient } from './patient.entity';

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Post()
  create(@Body() patient: Patient): Promise<Patient> {
    return this.patientsService.create(patient);
  }

  @Get()
  findAll(): Promise<Patient[]> {
    return this.patientsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Patient> {
    return this.patientsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() patient: Patient): Promise<void> {
    return this.patientsService.update(+id, patient);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.patientsService.remove(+id);
  }
}
