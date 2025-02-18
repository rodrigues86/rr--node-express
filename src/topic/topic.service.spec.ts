import { Topic } from "./topic.model";
import TopicService from "./topic.service";

describe("TopicService", () => {
  beforeEach(() => {
    (TopicService as any).topics = [];
  });

  test("should create a new topic", () => {
    const topic = TopicService.createTopic(
      "NestJS",
      "A framework for building efficient Node.js applications"
    );

    expect(topic).toBeInstanceOf(Topic);
    expect(topic.name).toBe("NestJS");
    expect(topic.content).toBe(
      "A framework for building efficient Node.js applications"
    );
    expect(topic.version).toBe(1);
  });

  test("should create a topic with a parent topic", () => {
    const parentTopic = TopicService.createTopic(
      "JavaScript",
      "Programming language"
    );
    const childTopic = TopicService.createTopic(
      "TypeScript",
      "Typed JavaScript",
      parentTopic.id
    );

    expect(childTopic.parentTopicId).toBe(parentTopic.id);
  });

  test("should update a topic and create a new version", () => {
    const topic = TopicService.createTopic("Node.js", "JavaScript runtime");
    const updatedTopic = TopicService.updateTopic(topic.id, "Updated content");

    expect(updatedTopic).toBeDefined();
    expect(updatedTopic?.version).toBe(2);
    expect(updatedTopic?.content).toBe("Updated content");
  });

  test("should not update a non-existing topic", () => {
    const updatedTopic = TopicService.updateTopic(
      "non-existent-id",
      "New content"
    );

    expect(updatedTopic).toBeNull();
  });

  test("should retrieve a topic by ID", () => {
    const topic = TopicService.createTopic(
      "Express.js",
      "Minimal web framework"
    );
    const retrievedTopic = TopicService.getTopicById(topic.id);

    expect(retrievedTopic).toEqual(topic);
  });

  test("should return undefined for a non-existing topic", () => {
    const retrievedTopic = TopicService.getTopicById("invalid-id");

    expect(retrievedTopic).toBeUndefined();
  });

  test("should retrieve all topics", () => {
    TopicService.createTopic("React", "Frontend library");
    TopicService.createTopic("Vue.js", "Progressive framework");

    const topics = TopicService.getAllTopics();
    expect(topics.length).toBe(2);
  });
});
