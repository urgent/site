// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Messages, Category, Tag } = initSchema(schema);

export {
  Messages,
  Category,
  Tag
};