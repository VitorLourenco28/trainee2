import { PartialType } from '@nestjs/mapped-types';
import { CreateJogoDto } from './create-jogo.dto'; 
import { IsOptional, IsString, IsNumber } from 'class-validator';
import { Transform } from 'class-transformer';
import { ArrumaNomePipe } from 'src/pipes/arruma-nome/arruma-nome.pipe';
import { ValidaAnoPipe } from 'src/pipes/valida-ano/valida-ano.pipe';
import { ValidaPrecoPipe } from 'src/pipes/valida-preco/valida-preco.pipe';


export class UpdateJogoDto extends PartialType(CreateJogoDto) {
    

    @IsOptional()
    @IsString()
    @Transform(({ value }) => new ArrumaNomePipe().transform(value))
    nome?: string;


    @IsOptional()
    @IsNumber()
    @Transform(({ value }) => new ValidaAnoPipe().transform(value))
    anoLancamento?: number;

    
    @IsOptional()
    @IsNumber({allowInfinity: false, allowNaN: false, maxDecimalPlaces: 2})
    @Transform(({ value }) => new ValidaPrecoPipe().transform(value))
    preco?: number;
}