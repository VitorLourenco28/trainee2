import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ArrumaNomePipe implements PipeTransform {
  transform(value: any, metadata?: ArgumentMetadata) {
  if (value === null || value === undefined) {
  return value;
  }

  if (typeof value !== 'string') {
  throw new BadRequestException('O nome deve ser uma string!');
  }

  if (value.trim().length > 50) {
  throw new BadRequestException('O nome deve ter no máximo 50 caracteres!');
  }

  const nomeArrumado = value.trim().toUpperCase();
  return nomeArrumado;
  }
}