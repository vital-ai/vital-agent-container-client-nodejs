import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatCodeResult
 */
export class HaleyChatCodeResult extends VITAL_Node {
  public haleyChatCodeErrorJSON?: string;
  public haleyChatCodeErrorFeedback?: string;
  public haleyChatCodeErrorMessage?: string;
  public haleyChatCodeExitStatus?: number;
  public haleyChatCodeInterpreterSourceURI?: string;
  public haleyChatCodeOutputJSON?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatCodeResult';
  }

  /**
   * Get property definitions for HaleyChatCodeResult
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatCodeErrorJSON',
        tsPropertyName: 'haleyChatCodeErrorJSON',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatCodeErrorFeedback',
        tsPropertyName: 'haleyChatCodeErrorFeedback',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatCodeErrorMessage',
        tsPropertyName: 'haleyChatCodeErrorMessage',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatCodeExitStatus',
        tsPropertyName: 'haleyChatCodeExitStatus',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatCodeInterpreterSourceURI',
        tsPropertyName: 'haleyChatCodeInterpreterSourceURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatCodeOutputJSON',
        tsPropertyName: 'haleyChatCodeOutputJSON',
        type: 'string',
        required: false
      }
    ];
  }


}
