import { v4 as uuidv4 } from "uuid";

export class Resource {
  id: string;
  topicId: string;
  url: string;
  description: string;
  type: "video" | "article" | "pdf";
  createdAt: Date;
  updatedAt: Date;

  constructor(
    topicId: string,
    url: string,
    description: string,
    type: "video" | "article" | "pdf"
  ) {
    this.id = uuidv4();
    this.topicId = topicId;
    this.url = url;
    this.description = description;
    this.type = type;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
