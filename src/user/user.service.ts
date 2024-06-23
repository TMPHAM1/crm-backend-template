import {  
    HttpException,
    HttpStatus,
    Injectable,
    InternalServerErrorException,
    Logger,
    Options, } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input';
import * as bcrypt from 'bcryptjs'

import { User } from './user.entity';
@Injectable()
export class UserService {
    private logger = new Logger();
    constructor(@InjectRepository(User) private repo: Repository<User>) {}

    async create(createUserInput: CreateUserInput): Promise <User | undefined> {
 try {   

 const { email, password } = createUserInput;
 const hashedPassword = await bcrypt.hash(password, 10);
 const user = this.repo.create({ email, password: hashedPassword });
 return await this.repo.save(user);
 }
 catch(err) {
    if (err.code == 23505) {
        this.logger.error(err.message, err.stack);
        throw new HttpException('Username alrady exists', HttpStatus.CONFLICT);
    }
    this.logger.error(err.message, err.stack);
    throw new InternalServerErrorException('Something went wrong, Try Again');
 }
 }
 findAll() {

 return this.repo.find({
    order: {
        email: "ASC",
        id: "DESC"
    }
 });
 }
 async findOneByUsername(username: string): Promise<User | undefined> {
    return this.repo.findOneBy({ username });
  }

  async findOneByEmail(email: string): Promise<User | undefined> {
    return this.repo.findOneBy({ email });
  }

  async findOneById(id: number): Promise<User | undefined> {
    return this.repo.findOneBy({ id });
  }

//  findOne(id: number) {
//  return `This action returns a #${id} user`;
//  }
//  update(id: number, updateUserInput: UpdateUserInput) {
//  return `This action updates a #${id} user`;
//  }
//  remove(id: number) {
//  return `This action removes a #${id} user`;
//  }
}