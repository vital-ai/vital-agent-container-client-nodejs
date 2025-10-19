import { HaleyMessage } from './haleyMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#HaleyDeviceDetailsMessage
 */
export class HaleyDeviceDetailsMessage extends HaleyMessage {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#HaleyDeviceDetailsMessage';
  }

  /**
   * Get property definitions for HaleyDeviceDetailsMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
