import {Column, Entity, PrimaryColumn, CreateDateColumn, ObjectIdColumn, OneToOne, JoinColumn,ManyToOne, BaseEntity, Index, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { UserDto } from './dto/UserDto';

@Entity('usuario')
export class User{
    
    @PrimaryGeneratedColumn({ name: "ID" })
    id: number;
    
    @Index()
    @Column({ name: 'USUARIO', type: 'varchar', length: 50 })
    usuario: string;

    @Column({ name: 'NOMBRE', type: 'varchar', length: 200 })
    nombre: string;

    @Column({ name: 'PASSWORD', type: 'varchar', length: 150 })
    password: string;

    @CreateDateColumn({ name: "FECHA_REGISTRO", type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    fechaRegistro: Date;

    @UpdateDateColumn({ name: "FECHA_MODIFICACION", type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    fechaModificacion: Date;

    
    constructor(params: UserDto = {} as UserDto){
        this.nombre=params.nombre;
        this.usuario=params.usuario;
        this.password=params.password;
        
    }
}