import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

/**
 * Este paso se realiza para evitar que se genere una instancia de Prisma cada vez
 * que el proyecto de actualice con Hot Reload. Por eso solamente se instancia una vez y
 * se guarda en una variable global. Esto sólo aplica para el entorno de desarrollo
 */
export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = db;
}
