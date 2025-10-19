import { HaleyResponseMessage } from './haleyResponseMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyRelayResponseMessage
 */
export class HaleyRelayResponseMessage extends HaleyResponseMessage {
  public resultSequence?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyRelayResponseMessage';
  }

  /**
   * Get property definitions for HaleyRelayResponseMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasResultSequence',
        tsPropertyName: 'resultSequence',
        type: 'number',
        required: false
      }
    ];
  }


}
