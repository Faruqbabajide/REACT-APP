import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Patient } from './patient.entity';

@Injectable()
export class PatientsService {
  constructor(
    @InjectRepository(Patient)
    private patientsRepository: Repository<Patient>,
  ) {}

  create(patient: Patient): Promise<Patient> {
    return this.patientsRepository.save(patient);
  }

  findAll(): Promise<Patient[]> {
    return this.patientsRepository.find();
  }

  findOne(id: number): Promise<Patient> {
    return this.patientsRepository.findOneBy({ id });
  }

  async update(id: number, patient: Patient): Promise<void> {
    await this.patientsRepository.update(id, patient);
  }

  async remove(id: number): Promise<void> {
    await this.patientsRepository.delete(id);
  }
}
