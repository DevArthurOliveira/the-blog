import {
  format,
  formatDistanceToNow as datefnsformatDistanceToNow,
} from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function formatDatetime(rawDate: string): string {
  const date = new Date(rawDate);

  return format(date, "dd/MM/yyyy 'ás' HH'h'mm", {
    locale: ptBR,
  });
}

export function formatDistanceToNow(rawDate: string): string {
  const date = new Date(rawDate);

  return datefnsformatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  });
}
