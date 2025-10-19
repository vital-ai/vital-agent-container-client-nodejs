import { AIMPMessage } from './aimpmessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#EnclosingPageURLButtonClickedMessage
 */
export class EnclosingPageURLButtonClickedMessage extends AIMPMessage {
  public url?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#EnclosingPageURLButtonClickedMessage';
  }

  /**
   * Get property definitions for EnclosingPageURLButtonClickedMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasUrl',
        tsPropertyName: 'url',
        type: 'string',
        required: false
      }
    ];
  }


}
