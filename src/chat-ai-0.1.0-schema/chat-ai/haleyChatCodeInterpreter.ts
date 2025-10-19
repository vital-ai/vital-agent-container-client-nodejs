import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatCodeInterpreter
 */
export class HaleyChatCodeInterpreter extends VITAL_Node {
  public haleyChatCodeLanguageURI?: string;
  public haleyChatCodeInterpreterPredecessorURI?: string;
  public haleyChatCodeBody?: string;
  public haleyChatCodeOutputTarget?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatCodeInterpreter';
  }

  /**
   * Get property definitions for HaleyChatCodeInterpreter
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatCodeLanguageURI',
        tsPropertyName: 'haleyChatCodeLanguageURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatCodeInterpreterPredecessorURI',
        tsPropertyName: 'haleyChatCodeInterpreterPredecessorURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatCodeBody',
        tsPropertyName: 'haleyChatCodeBody',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatCodeOutputTarget',
        tsPropertyName: 'haleyChatCodeOutputTarget',
        type: 'string',
        required: false
      }
    ];
  }


}
