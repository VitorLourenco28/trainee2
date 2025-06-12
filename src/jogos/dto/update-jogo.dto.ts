import { PartialType } from '@nestjs/mapped-types';
import { CreateJogoDto } from './create-jogo.dto'; 
import { IsOptional, IsString, IsNumber } from 'class-validator';


export class UpdateJogoDto extends PartialType(CreateJogoDto) {
    

    @IsOptional()
    @IsString()
    nome?: string;


    @IsOptional()
    @IsNumber()
    anoLancamento?: number;

    
    @IsOptional()
    @IsNumber({allowInfinity: false, allowNaN: false, maxDecimalPlaces: 2})
    preco?: number;
}