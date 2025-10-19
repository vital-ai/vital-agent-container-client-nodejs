import { AIMPMessage } from './aimpmessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#FacebookMessage
 */
export class FacebookMessage extends AIMPMessage {
  public facebookUserID?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#FacebookMessage';
  }

  /**
   * Get property definitions for FacebookMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasFacebookUserID',
        tsPropertyName: 'facebookUserID',
        type: 'string',
        required: false
      }
    ];
  }


}
