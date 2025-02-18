import { Request, Response } from 'express';
import TopicService from './topic.service';

class TopicController {
  static create(req: Request, res: Response) {
    const { name, content, parentTopicId } = req.body;
    const topic = TopicService.createTopic(name, content, parentTopicId);
    res.status(201).json(topic);
  }

  static update(req: Request, res: Response) {
    const { id } = req.params;
    const { content } = req.body;

    const updatedTopic = TopicService.updateTopic(id, content);
    if (!updatedTopic) res.status(404).json({ message: 'Topic not found' });

    res.json(updatedTopic);
  }

  static getAll(req: Request, res: Response) {
    res.json(TopicService.getAllTopics());
  }

  static getById(req: Request, res: Response) {
    const { id } = req.params;
    const topic = TopicService.getTopicById(id);
    if (!topic) res.status(404).json({ message: 'Topic not found' });

    res.json(topic);
  }
}

export default TopicController;
