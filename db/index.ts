import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema'

// for query purposes
const queryClient = postgres(process.env.DATABASE_URL!); //! mark to make typescript happy 
const db = drizzle(queryClient, {schema}); //passing schema object from schema file 

export {db};

