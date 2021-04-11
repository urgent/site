// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Category, Tag, MessageTag, Message } = initSchema(schema);

export {
  Category,
  Tag,
  MessageTag,
  Message
};