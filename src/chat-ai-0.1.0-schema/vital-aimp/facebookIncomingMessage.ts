import { FacebookMessage } from './facebookMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#FacebookIncomingMessage
 */
export class FacebookIncomingMessage extends FacebookMessage {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#FacebookIncomingMessage';
  }

  /**
   * Get property definitions for FacebookIncomingMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
