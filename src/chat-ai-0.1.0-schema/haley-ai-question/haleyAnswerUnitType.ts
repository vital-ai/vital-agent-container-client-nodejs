import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyAnswerUnitType
 */
export class HaleyAnswerUnitType extends VITAL_Node {
  public haleyUnitSystemURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyAnswerUnitType';
  }

  /**
   * Get property definitions for HaleyAnswerUnitType
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyUnitSystemURI',
        tsPropertyName: 'haleyUnitSystemURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
