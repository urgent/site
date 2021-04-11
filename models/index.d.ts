import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Category {
  readonly id: string;
  readonly name: string;
  readonly tags?: (Tag | null)[];
  constructor(init: ModelInit<Category>);
  static copyOf(source: Category, mutator: (draft: MutableModel<Category>) => MutableModel<Category> | void): Category;
}

export declare class Tag {
  readonly id: string;
  readonly label: string;
  readonly username?: string;
  readonly category?: Category;
  readonly messages?: (MessageTag | null)[];
  constructor(init: ModelInit<Tag>);
  static copyOf(source: Tag, mutator: (draft: MutableModel<Tag>) => MutableModel<Tag> | void): Tag;
}

export declare class MessageTag {
  readonly id: string;
  readonly tag: Tag;
  readonly message: Message;
  constructor(init: ModelInit<MessageTag>);
  static copyOf(source: MessageTag, mutator: (draft: MutableModel<MessageTag>) => MutableModel<MessageTag> | void): MessageTag;
}

export declare class Message {
  readonly id: string;
  readonly body: string;
  readonly username?: string;
  readonly tags?: (MessageTag | null)[];
  constructor(init: ModelInit<Message>);
  static copyOf(source: Message, mutator: (draft: MutableModel<Message>) => MutableModel<Message> | void): Message;
}