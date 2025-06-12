import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Jogo } from './entities/jogo/jogo.entity'; 
import { CreateJogoDto } from './dto/create-jogo.dto';
import { UpdateJogoDto } from './dto/update-jogo.dto';


@Injectable()
export class JogosService {
  constructor(
    @InjectRepository(Jogo)
    private readonly jogoRepository: Repository<Jogo>,
  ) {}


  async create(createJogoDto: CreateJogoDto): Promise<Jogo> {
    const jogo = this.jogoRepository.create(createJogoDto);
    return await this.jogoRepository.save(jogo);
  }


  async findAll() {
    const jogos = await this.jogoRepository.find();
    if(jogos.length == 0 ){
      throw new NotFoundException('Não existem jogos adicionados!');
    }

    return jogos;
  }


  async findOne(id) {
    const jogo = await this.jogoRepository.findOneBy ({ id });

    if (!jogo){
      throw new NotFoundException(`Jogo ${id} não encontrado`);
    }

    return jogo;
  }
  

  async update(id: number, updateJogoDto: UpdateJogoDto) {
    const jogo = await this.jogoRepository.findOneBy ({ id });
    if (!jogo){
        throw new NotFoundException(`Jogo ${id} nao encontrado para atualizar!`)
      }
      await this.jogoRepository.update(id, updateJogoDto);
      const jogoAtualizado = await this.jogoRepository.findOneBy ({ id });
      return jogoAtualizado;
  }


  async remove(id: number){
    const jogo = await this.jogoRepository.findOneBy({id});
    if(!jogo){
      throw new NotFoundException(`Jogo ${id} nao encontrado para excluir!`)
    }

    await this.jogoRepository.delete(id);
    return `Jogo com o id ${id} removido com sucesso!`
  }
}