import { AIMPMessage } from './aimpmessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ButtonClickedMessage
 */
export class ButtonClickedMessage extends AIMPMessage {
  public buttonURI?: string;
  public button?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#ButtonClickedMessage';
  }

  /**
   * Get property definitions for ButtonClickedMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasButtonURI',
        tsPropertyName: 'buttonURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasButton',
        tsPropertyName: 'button',
        type: 'string',
        required: false
      }
    ];
  }


}
