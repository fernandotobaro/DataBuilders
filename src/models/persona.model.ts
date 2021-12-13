import { Entity, model, property, hasMany } from '@loopback/repository';
import { Pedido } from './pedido.model';

@model({ settings: { strict: false } })
export class Persona extends Entity {
    @property({
        type: 'string',
        id: true,
        generated: true,
    })
    id?: string;

    @property({
        type: 'string',
        required: true,
    })
    nombre: string;

    @property({
        type: 'string',
        required: true,
    })
    apellido: string;

    @property({
        type: 'string',
        required: true,
    })
    correo: string;

    @property({
        type: 'string',
        required: true,
    })
    celular: string;

    @property({
        type: 'number',
        required: true,
    })
    clave: number;

    @hasMany(() => Pedido)
    y: Pedido[];
    // Define well-known properties here

    // Indexer property to allow additional data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [prop: string]: any;

    constructor(data?: Partial<Persona>) {
        super(data);
    }
}

export interface PersonaRelations {
    // describe navigational properties here
}

export type PersonaWithRelations = Persona & PersonaRelations;
