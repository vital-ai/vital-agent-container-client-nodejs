import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyTimezoneUTCType
 */
export class HaleyTimezoneUTCType extends VITAL_Node {
  public timezoneUTCDelta?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyTimezoneUTCType';
  }

  /**
   * Get property definitions for HaleyTimezoneUTCType
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasTimezoneUTCDelta',
        tsPropertyName: 'timezoneUTCDelta',
        type: 'number',
        required: false,
        format: 'double'
      }
    ];
  }


}
