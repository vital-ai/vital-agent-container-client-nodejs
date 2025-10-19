import { UserInterfaceCommandMessage } from './userInterfaceCommandMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#CancelCommandMessage
 */
export class CancelCommandMessage extends UserInterfaceCommandMessage {
  public cancelCommandMessageURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#CancelCommandMessage';
  }

  /**
   * Get property definitions for CancelCommandMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasCancelCommandMessageURI',
        tsPropertyName: 'cancelCommandMessageURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
