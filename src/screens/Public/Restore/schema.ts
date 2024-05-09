import { z } from 'zod';

export const restoreSchema = z.object({
  email: z.string().min(1, 'O email é obrigatório').email('Email inválido'),
});

export type RestoreSchemaType = z.infer<typeof restoreSchema>;
