import { v4 as uuidv4 } from 'uuid';

export class Topic {
  id: string;
  name: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  version: number;
  parentTopicId?: string;

  constructor(name: string, content: string, parentTopicId?: string, version: number = 1) {
    this.id = uuidv4();
    this.name = name;
    this.content = content;
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.version = version;
    this.parentTopicId = parentTopicId;
  }

  updateContent(newContent: string): Topic {
    return new Topic(this.name, newContent, this.parentTopicId, this.version + 1);
  }
}
