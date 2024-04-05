import { z } from 'zod';

export const loginUserSchema = z.object({
	username: z.string().min(1, 'digite o nome de usuário'),
	password: z.string().min(1, 'digite a senha'),
});

export type LoginUserSchemaType = z.infer<typeof loginUserSchema>;
