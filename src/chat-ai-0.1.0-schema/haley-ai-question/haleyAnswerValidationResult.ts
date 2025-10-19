import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyAnswerValidationResult
 */
export class HaleyAnswerValidationResult extends VITAL_Node {
  public haleyAnswerValidationStatus?: string;
  public haleyAnswerValidationMessage?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyAnswerValidationResult';
  }

  /**
   * Get property definitions for HaleyAnswerValidationResult
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerValidationStatus',
        tsPropertyName: 'haleyAnswerValidationStatus',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerValidationMessage',
        tsPropertyName: 'haleyAnswerValidationMessage',
        type: 'string',
        required: false
      }
    ];
  }


}
