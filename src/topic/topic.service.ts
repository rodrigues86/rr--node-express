import { Topic } from "./topic.model";

class TopicService {
  private topics: Topic[] = [];

  createTopic(name: string, content: string, parentTopicId?: string): Topic {
    const newTopic = new Topic(name, content, parentTopicId);
    this.topics.push(newTopic);
    return newTopic;
  }

  updateTopic(id: string, content: string): Topic | null {
    const topic = this.topics.find(t => t.id === id);
    if (!topic) return null;

    const newVersion = topic.updateContent(content);
    this.topics.push(newVersion);
    return newVersion;
  }

  getTopicById(id: string): Topic | undefined {
    return this.topics.find(t => t.id === id);
  }

  getAllTopics(): Topic[] {
    return this.topics;
  }
}

export default new TopicService();
