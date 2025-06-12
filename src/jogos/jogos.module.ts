import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JogosService } from './jogos.service';
import { JogosController } from './jogos.controller';
import { Jogo } from './entities/jogo/jogo.entity'; 


@Module({
  imports: [TypeOrmModule.forFeature([Jogo])],
  controllers: [JogosController],
  providers: [JogosService],
})
export class JogosModule {}