import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatPublicInteraction
 */
export class HaleyChatPublicInteraction extends VITAL_Node {
  public haleyChatPublicInteractionTitle?: string;
  public haleyChatPublicInteractionSummary?: string;
  public haleyChatPublicShareTypeURI?: string;
  public haleyChatPublicInteractionPath?: string;
  public haleyChatPublicShareStatusURI?: string;
  public haleyChatPublicInteractionShortURL?: string;
  public haleyChatPublicInteractionIdentifier?: string;
  public haleyChatPublicProfileURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatPublicInteraction';
  }

  /**
   * Get property definitions for HaleyChatPublicInteraction
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPublicInteractionTitle',
        tsPropertyName: 'haleyChatPublicInteractionTitle',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPublicInteractionSummary',
        tsPropertyName: 'haleyChatPublicInteractionSummary',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPublicShareTypeURI',
        tsPropertyName: 'haleyChatPublicShareTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPublicInteractionPath',
        tsPropertyName: 'haleyChatPublicInteractionPath',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPublicShareStatusURI',
        tsPropertyName: 'haleyChatPublicShareStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPublicInteractionShortURL',
        tsPropertyName: 'haleyChatPublicInteractionShortURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPublicInteractionIdentifier',
        tsPropertyName: 'haleyChatPublicInteractionIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPublicProfileURI',
        tsPropertyName: 'haleyChatPublicProfileURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
