import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatContentObject
 */
export class HaleyChatContentObject extends VITAL_Node {
  public haleyChatContentObjectIcon?: string;
  public haleyChatContentTitle?: string;
  public haleyChatContentObjectOrder?: number;
  public haleyChatContentJSON?: string;
  public haleyChatContentObjectTypeURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatContentObject';
  }

  /**
   * Get property definitions for HaleyChatContentObject
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatContentObjectIcon',
        tsPropertyName: 'haleyChatContentObjectIcon',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatContentTitle',
        tsPropertyName: 'haleyChatContentTitle',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatContentObjectOrder',
        tsPropertyName: 'haleyChatContentObjectOrder',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatContentJSON',
        tsPropertyName: 'haleyChatContentJSON',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatContentObjectTypeURI',
        tsPropertyName: 'haleyChatContentObjectTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
