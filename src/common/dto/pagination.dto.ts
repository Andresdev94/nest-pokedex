import { IsNumber, IsOptional, IsPositive, Min } from 'class-validator';

export class PaginatioDto {
  @IsNumber()
  @IsPositive()
  @IsOptional()
  @Min(1)
  limit?: number;

  @IsNumber()
  @IsOptional()
  @IsPositive()
  offset?: number;
}
