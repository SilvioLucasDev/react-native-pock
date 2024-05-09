import { z } from 'zod';

export const registerSchema = z
  .object({
    email: z.string().min(1, 'O email é obrigatório').email('Email inválido'),
    password: z
      .string()
      .min(6, 'A senha deve ter no mínimo seis caracteres')
      .regex(new RegExp('.*[A-Z].*'), 'A senha deve ter uma letra maiúscula')
      .regex(new RegExp('.*[a-z].*'), 'A senha deve ter uma letra minuscula')
      .regex(new RegExp('.*\\d.*'), 'A senha deve ter um número')
      .regex(
        new RegExp('.*[`~<>?,./!@#$%^&*()\\-_+="\'|{}\\[\\];:\\\\].*'),
        'A senha deve ter um caractere especial',
      ),
    confirm_password: z
      .string()
      .min(6, 'A senha deve ter no mínimo seis caracteres')
      .regex(new RegExp('.*[A-Z].*'), 'A senha deve ter uma letra maiúscula')
      .regex(new RegExp('.*[a-z].*'), 'A senha deve ter uma letra minuscula')
      .regex(new RegExp('.*\\d.*'), 'A senha deve ter um número')
      .regex(
        new RegExp('.*[`~<>?,./!@#$%^&*()\\-_+="\'|{}\\[\\];:\\\\].*'),
        'A senha deve ter um caractere especial',
      ),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'As senhas não correspondem',
    path: ['confirm_password'],
  });

export type RegisterSchemaType = z.infer<typeof registerSchema>;
