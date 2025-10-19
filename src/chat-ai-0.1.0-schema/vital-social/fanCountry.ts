import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-social#FanCountry
 */
export class FanCountry extends VITAL_Node {
  public socialLikeCount?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-social#FanCountry';
  }

  /**
   * Get property definitions for FanCountry
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasSocialLikeCount',
        tsPropertyName: 'socialLikeCount',
        type: 'number',
        required: false
      }
    ];
  }


}
