import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidaAnoPipe implements PipeTransform {
  transform(value: any, metadata?: ArgumentMetadata) {
  if (value === null || value === undefined) {
  return value;
  }

  if (value === '') {
    throw new BadRequestException('O ano não pode ficar em branco!');
  }

  const ano = Number(value);
  const anoAtual = new Date().getFullYear();

  if (isNaN(ano)) {
    throw new BadRequestException('O ano deve ser um número!');
  }

  if (ano < 1989 || ano > anoAtual) {
  throw new BadRequestException(`Ano inválido. Informe entre 1989 e ${anoAtual}!`);
  }

  return ano;
  }
}