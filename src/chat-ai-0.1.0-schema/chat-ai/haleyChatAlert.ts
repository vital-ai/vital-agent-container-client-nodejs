import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatAlert
 */
export class HaleyChatAlert extends VITAL_Node {
  public haleyChatAlertStatusURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatAlert';
  }

  /**
   * Get property definitions for HaleyChatAlert
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatAlertStatusURI',
        tsPropertyName: 'haleyChatAlertStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
