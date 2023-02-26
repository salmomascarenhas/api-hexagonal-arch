import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { firstValueFrom } from 'rxjs';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
    private readonly httpService: HttpService,
  ) {}
  async create(createUserDto: CreateUserDto) {
    console.log(createUserDto);
    const { data } = await firstValueFrom(
      this.httpService.get(
        `https://viacep.com.br/ws/${createUserDto.cep}/json`,
      ),
    );

    createUserDto.logradouro ||= data.logradouro;
    createUserDto.complemento ||= data.complemento;
    createUserDto.bairro ||= data.bairro;
    createUserDto.localidade ||= data.localidade;
    createUserDto.uf ||= data.uf;
    createUserDto.ibge ||= data.ibge;
    createUserDto.gia ||= data.gia;
    createUserDto.ddd ||= data.ddd;
    createUserDto.siafi ||= data.siafi;

    const newUser = this.usersRepository.create(createUserDto);

    return await this.usersRepository.save(newUser);
  }

  async findAll() {
    return await this.usersRepository.find();
  }

  async findOne(id: string) {
    return await this.usersRepository.findOneBy({ id });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update(id, updateUserDto);
  }

  async remove(id: string) {
    const user = await this.findOne(id);

    return await this.usersRepository.remove(user);
  }
}
