import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity()
export class Jogo {


  @PrimaryGeneratedColumn()
  id: number;


  @Column()
  nome: string;


  @Column()
  anoLancamento: number;

  
  @Column('decimal')
  preco: number;
}