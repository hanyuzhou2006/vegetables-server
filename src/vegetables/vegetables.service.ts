
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vegetable } from './vegetable.entity';
import { User } from 'src/users/user.entity';

@Injectable()
export class VegetablesService {
  constructor(
    @InjectRepository(Vegetable)
    private vegetablesRepository: Repository<Vegetable>,
  ) {}

  findAll(): Promise<Vegetable[]> {
    return this.vegetablesRepository.find();
  }

  findByUser(user:User): Promise<Vegetable[]> {
    return this.vegetablesRepository.find({user:user})
  }

  findOne(id: number): Promise<Vegetable> {
    return this.vegetablesRepository.findOne(id);
  }
  
  async create(vegetable:Vegetable):Promise<Vegetable>{
    return this.vegetablesRepository.save(vegetable);
  }

  async remove(id: string): Promise<void> {
    await this.vegetablesRepository.delete(id);
  }
}