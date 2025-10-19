import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyQuestionMapping
 */
export class HaleyQuestionMapping extends VITAL_Node {
  public haleyQuestionMappingTypeURI?: string;
  public haleyQuestionMappingLabel?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyQuestionMapping';
  }

  /**
   * Get property definitions for HaleyQuestionMapping
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyQuestionMappingTypeURI',
        tsPropertyName: 'haleyQuestionMappingTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyQuestionMappingLabel',
        tsPropertyName: 'haleyQuestionMappingLabel',
        type: 'string',
        required: false
      }
    ];
  }


}
