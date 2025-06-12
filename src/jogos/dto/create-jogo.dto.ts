import { IsInt, IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';


export class CreateJogoDto {
  @IsNotEmpty({message: 'Não pode ficar em branco!'})
  @IsString({message: 'Precisa estar entre aspas!'})
  nome: string;

  @IsNotEmpty({message:'Não pode ficar em branco!!'})
  @IsInt()
  anoLancamento: number;

  @IsNotEmpty({message:'Não pode ficar em branco!'})
  @IsNumber({allowInfinity: false, allowNaN: false, maxDecimalPlaces: 2})
  @IsPositive({message:'Não pode ser número negativo!'})
  preco: number;
}