import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyQuestionArrayInstance
 */
export class HaleyQuestionArrayInstance extends VITAL_Node {
  public haleyQuestionArray?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyQuestionArrayInstance';
  }

  /**
   * Get property definitions for HaleyQuestionArrayInstance
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyQuestionArray',
        tsPropertyName: 'haleyQuestionArray',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
