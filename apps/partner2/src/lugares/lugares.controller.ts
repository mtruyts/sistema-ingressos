import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete 
} from '@nestjs/common';
import { SpotsService } from '@app/core/spots/spots.service';
import { CriarLugarRequest } from './request/criar-lugar.request';
import { AtualizarLugarRequest } from './request/atualizar-lugar.request';

@Controller('eventos/:eventoId/lugares')
export class LugaresController {
  constructor(private readonly spotsService: SpotsService) {}

  @Post()
  create(@Body() criarLugarRequest: CriarLugarRequest, 
  @Param('eventoId') eventoId: string,
) {
    return this.spotsService.create({
      name: criarLugarRequest.nome,
      eventId: eventoId,
});
  }

  @Get()
  findAll(@Param('eventoId') eventId: string) {
    return this.spotsService.findAll(eventId);
  }

  @Get(':lugarId')
  findOne(@Param('id') lugarId: string, @Param('eventoId') eventoId: string) {
    return this.spotsService.findOne(eventoId, lugarId);
  }

  @Patch(':slugarId')
  update(@Param('id') lugarId: string, 
  @Param('eventoId') eventoId: string, 
  @Body() atualizarLugarRequest: AtualizarLugarRequest,
) {
    return this.spotsService.update(eventoId, lugarId, {
      name: atualizarLugarRequest.nome,
    });
  }

  @Delete(':lugarId')
  remove(@Param('id') lugarId: string, @Param('eventoId') eventoId: string) {
    return this.spotsService.remove(eventoId, lugarId);
  }
}
