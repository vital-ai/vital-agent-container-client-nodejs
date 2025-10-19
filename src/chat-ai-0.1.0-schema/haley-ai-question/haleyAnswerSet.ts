import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyAnswerSet
 */
export class HaleyAnswerSet extends VITAL_Node {
  public answerSubset?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyAnswerSet';
  }

  /**
   * Get property definitions for HaleyAnswerSet
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAnswerSubset',
        tsPropertyName: 'answerSubset',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
