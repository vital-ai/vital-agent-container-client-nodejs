import { AIMPMessage } from './aimpmessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DialogPageElementMessage
 */
export class DialogPageElementMessage extends AIMPMessage {
  public index?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#DialogPageElementMessage';
  }

  /**
   * Get property definitions for DialogPageElementMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasIndex',
        tsPropertyName: 'index',
        type: 'number',
        required: false,
        format: 'double'
      }
    ];
  }


}
