import { AIMPMessage } from './aimpmessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#MenuClickedMessage
 */
export class MenuClickedMessage extends AIMPMessage {
  public menuURI?: string;
  public menu?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#MenuClickedMessage';
  }

  /**
   * Get property definitions for MenuClickedMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasMenuURI',
        tsPropertyName: 'menuURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasMenu',
        tsPropertyName: 'menu',
        type: 'string',
        required: false
      }
    ];
  }


}
