import { FacebookMessage } from './facebookMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#FacebookOutgoingMessage
 */
export class FacebookOutgoingMessage extends FacebookMessage {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#FacebookOutgoingMessage';
  }

  /**
   * Get property definitions for FacebookOutgoingMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
