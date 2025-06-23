import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ArrumaNomePipe } from 'src/pipes/arruma-nome/arruma-nome.pipe';
import { ValidaAnoPipe } from 'src/pipes/valida-ano/valida-ano.pipe';
import { ValidaPrecoPipe } from 'src/pipes/valida-preco/valida-preco.pipe';


export class CreateJogoDto {
  @IsNotEmpty({message: 'O nome não pode ficar em branco!'})
  @IsString({message: 'O nome tem que ser uma string'})
  @Transform(({ value }) => new ArrumaNomePipe().transform(value))
  nome: string;

  @IsNotEmpty({message:'O ano pode ficar em branco!!'})
  @IsNumber()
  @Transform(({value}) => new ValidaAnoPipe().transform(value))
  anoLancamento: number;

  @IsNotEmpty({message:'O preço não pode ficar em branco!'})
  @Transform(({value}) => new ValidaPrecoPipe().transform(value))
  preco: any;
}