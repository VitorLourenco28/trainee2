import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidaPrecoPipe implements PipeTransform {
  transform(value: any, metadata?: ArgumentMetadata) {
  if (value === null || value === undefined) {
  return value;
  }

  if (value === '') {
      throw new BadRequestException('O preço não pode ficar em branco!');
  }

  const preco = parseFloat(value);

  if (isNaN(preco)) {
    throw new BadRequestException('O preço deve ser um número!');
  }

  if (preco < 1) {
    throw new BadRequestException('O preço não pode ser menor que R$ 1!');
  }

  return parseFloat(preco.toFixed(2));
  }
}