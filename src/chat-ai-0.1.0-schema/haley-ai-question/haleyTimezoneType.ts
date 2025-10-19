import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyTimezoneType
 */
export class HaleyTimezoneType extends VITAL_Node {
  public standardTimeUTCType?: string;
  public daylightSavingsZone?: boolean;
  public daylightSavingsTimeUTCType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyTimezoneType';
  }

  /**
   * Get property definitions for HaleyTimezoneType
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasStandardTimeUTCType',
        tsPropertyName: 'standardTimeUTCType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isDaylightSavingsZone',
        tsPropertyName: 'daylightSavingsZone',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasDaylightSavingsTimeUTCType',
        tsPropertyName: 'daylightSavingsTimeUTCType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
