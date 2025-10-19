import { HaleyStatusMessage } from '../vital-aimp/haleyStatusMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyRelayStatusMessage
 */
export class HaleyRelayStatusMessage extends HaleyStatusMessage {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyRelayStatusMessage';
  }

  /**
   * Get property definitions for HaleyRelayStatusMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
