import { HaleyMessage } from './haleyMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#HaleyThingMessage
 */
export class HaleyThingMessage extends HaleyMessage {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#HaleyThingMessage';
  }

  /**
   * Get property definitions for HaleyThingMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
