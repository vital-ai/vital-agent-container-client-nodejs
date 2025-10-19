import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatInteractionMessageRange
 */
export class HaleyChatInteractionMessageRange extends VITAL_Node {
  public haleyChatInteractionMessageRangeTypeURI?: string;
  public chatMessageRangeStartDateTime?: string | Date;
  public chatMessageRangeMaxCount?: number;
  public chatMessageRangeEndOpen?: boolean;
  public chatMessageRangeEndSequence?: number;
  public haleyChatInteractionURI?: string;
  public chatMessageRangeStartOpen?: boolean;
  public chatMessageRangeStartSequence?: number;
  public chatMessageRangeEndDateTime?: string | Date;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatInteractionMessageRange';
  }

  /**
   * Get property definitions for HaleyChatInteractionMessageRange
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionMessageRangeTypeURI',
        tsPropertyName: 'haleyChatInteractionMessageRangeTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasChatMessageRangeStartDateTime',
        tsPropertyName: 'chatMessageRangeStartDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasChatMessageRangeMaxCount',
        tsPropertyName: 'chatMessageRangeMaxCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#isChatMessageRangeEndOpen',
        tsPropertyName: 'chatMessageRangeEndOpen',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasChatMessageRangeEndSequence',
        tsPropertyName: 'chatMessageRangeEndSequence',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionURI',
        tsPropertyName: 'haleyChatInteractionURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#isChatMessageRangeStartOpen',
        tsPropertyName: 'chatMessageRangeStartOpen',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasChatMessageRangeStartSequence',
        tsPropertyName: 'chatMessageRangeStartSequence',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasChatMessageRangeEndDateTime',
        tsPropertyName: 'chatMessageRangeEndDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      }
    ];
  }


}
