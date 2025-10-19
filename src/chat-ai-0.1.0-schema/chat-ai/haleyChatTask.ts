import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatTask
 */
export class HaleyChatTask extends VITAL_Node {
  public haleyChatTotalTokenCount?: number;
  public haleyChatTaskUpdateDateTime?: string | Date;
  public haleyChatTaskStatusURI?: string;
  public haleyChatPromptTokenCount?: number;
  public haleyChatTaskTypeURI?: string;
  public haleyChatInteractionURI?: string;
  public haleyChatTaskStartDateTime?: string | Date;
  public haleyChatTaskEndDateTime?: string | Date;
  public haleyChatCompletionTokenCount?: number;
  public haleyChatMessageURI?: string;
  public haleyChatTaskDeltaTime?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatTask';
  }

  /**
   * Get property definitions for HaleyChatTask
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatTotalTokenCount',
        tsPropertyName: 'haleyChatTotalTokenCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatTaskUpdateDateTime',
        tsPropertyName: 'haleyChatTaskUpdateDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatTaskStatusURI',
        tsPropertyName: 'haleyChatTaskStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPromptTokenCount',
        tsPropertyName: 'haleyChatPromptTokenCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatTaskTypeURI',
        tsPropertyName: 'haleyChatTaskTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionURI',
        tsPropertyName: 'haleyChatInteractionURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatTaskStartDateTime',
        tsPropertyName: 'haleyChatTaskStartDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatTaskEndDateTime',
        tsPropertyName: 'haleyChatTaskEndDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatCompletionTokenCount',
        tsPropertyName: 'haleyChatCompletionTokenCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatMessageURI',
        tsPropertyName: 'haleyChatMessageURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatTaskDeltaTime',
        tsPropertyName: 'haleyChatTaskDeltaTime',
        type: 'number',
        required: false
      }
    ];
  }


}
