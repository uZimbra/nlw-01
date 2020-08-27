import { Request, Response } from 'express';
import knex from '../database/connection';

class ColectPointsController {
  async index(request: Request, response: Response) {
    const { city, uf, items } = request.query;

    const parsedItems = String(items)
      .split(',')
      .map(item => Number(item.trim()));

    const points = await knex('colect_points')
      .join('colect_point_items', 'colect_points.id', '=', 'colect_point_items.colect_point_id')
      .whereIn('colect_point_items.item_id', parsedItems)
      .where('city', String(city))
      .where('uf', String(uf))
      .distinct()
      .select('colect_points.*')

    const serializedPoints = points.map(point => {
      return {
        ...point,
        image_url: `http://192.168.0.102:3333/uploads/${point.image}`
      };
    });

    return response.json(serializedPoints)
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const point = await knex('colect_points').where('id', id).first();

    const items = await knex('items')
      .join('colect_point_items', 'items.id', '=', 'colect_point_items.item_id')
      .where('colect_point_items.colect_point_id', id)
      .select('items.title');

    const serializedPoint = {
      ...point,
      image_url: `http://192.168.0.102:3333/uploads/${point.image}`
    };

    if (!point) {
      return response.status(400).json({ message: 'Point not found!' })
    }

    return response.json({ point: serializedPoint , items });
  }

  async create(request: Request, response: Response) {
    const {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items
    } = request.body;
    
    const trx = await knex.transaction();
     
    const point = {
      image: request.file.filename,
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf
    }
    
    if (!request.file.filename) {
      return response.send('Formato Inválido de Imagem');
    }

    const createdPoint = await trx('colect_points').insert(point);
  
    const colect_point_id = createdPoint[0];

    const colectPointItems = items
      .split(',')
      .map((item: string) => Number(item.trim()))
      .map((item_id: number) => {
          return {
            colect_point_id,
            item_id
          };
      });

    if (createdPoint && await trx('colect_point_items').insert(colectPointItems)) {
      trx.commit();
    } else {
      trx.rollback();
    }

    return response.json({
      id: colect_point_id,
      ...point
    });
  }
}

export default ColectPointsController;