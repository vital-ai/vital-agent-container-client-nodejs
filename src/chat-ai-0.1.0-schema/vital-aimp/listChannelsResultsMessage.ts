import { AIMPMessage } from './aimpmessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ListChannelsResultsMessage
 */
export class ListChannelsResultsMessage extends AIMPMessage {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#ListChannelsResultsMessage';
  }

  /**
   * Get property definitions for ListChannelsResultsMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
