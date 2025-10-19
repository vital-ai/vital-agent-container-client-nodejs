import { KGSlot } from './kgslot';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGGeoLocationSlot
 */
export class KGGeoLocationSlot extends KGSlot {
  public geoLocationSlotValue?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGGeoLocationSlot';
  }

  /**
   * Get property definitions for KGGeoLocationSlot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasGeoLocationSlotValue',
        tsPropertyName: 'geoLocationSlotValue',
        type: 'string',
        required: false
      }
    ];
  }


}
