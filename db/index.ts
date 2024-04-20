import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

// for query purposes
const queryClient = postgres(process.env.DATABASE_URL!); //! mark to makew typescript happy 
const db = drizzle(queryClient);

export {db};

