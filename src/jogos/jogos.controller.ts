import { Controller, Get, Post, Body, Param, Delete, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { JogosService } from './jogos.service';
import { CreateJogoDto } from './dto/create-jogo.dto';
import { UpdateJogoDto } from './dto/update-jogo.dto';


@Controller('jogos')
@UsePipes(new ValidationPipe({whitelist: true}))
export class JogosController {
  constructor(private readonly jogosService: JogosService) {}

  
  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  create(
    @Body() createJogoDto: CreateJogoDto){
    return this.jogosService.create(createJogoDto)
  }

  
  @Get()
  @UsePipes(new ValidationPipe({whitelist: true}))
  findAll() {
    return this.jogosService.findAll();
  }


  @Get(':id')
  @UsePipes(new ValidationPipe({whitelist: true}))
  findOne(@Param('id') id: string) {
    return this.jogosService.findOne(id);
  }


  @Put(':id')
  @UsePipes(new ValidationPipe({whitelist: true}))
  update(@Param('id') id: number, @Body() updateJogoDto: UpdateJogoDto) {
    return this.jogosService.update(id, updateJogoDto);
  }

  @Delete()
  @UsePipes(new ValidationPipe({whitelist: true}))
  removeAll() {
    return this.jogosService.removeAll();
  }


  @Delete(':id')
  @UsePipes(new ValidationPipe({whitelist: true}))
  remove(@Param('id') id: string) {
    return this.jogosService.remove(+id);
  }
}