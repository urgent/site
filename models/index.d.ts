import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Messages {
  readonly id: string;
  readonly body?: string;
  readonly tagID?: string;
  constructor(init: ModelInit<Messages>);
  static copyOf(source: Messages, mutator: (draft: MutableModel<Messages>) => MutableModel<Messages> | void): Messages;
}

export declare class Category {
  readonly id: string;
  readonly name: string;
  readonly tags?: (Tag | null)[];
  constructor(init: ModelInit<Category>);
  static copyOf(source: Category, mutator: (draft: MutableModel<Category>) => MutableModel<Category> | void): Category;
}

export declare class Tag {
  readonly id: string;
  readonly categoryID: string;
  readonly label: string;
  constructor(init: ModelInit<Tag>);
  static copyOf(source: Tag, mutator: (draft: MutableModel<Tag>) => MutableModel<Tag> | void): Tag;
}