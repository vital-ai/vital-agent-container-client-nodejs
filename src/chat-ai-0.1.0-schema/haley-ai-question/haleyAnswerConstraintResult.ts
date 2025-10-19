import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraintResult
 */
export class HaleyAnswerConstraintResult extends VITAL_Node {
  public haleyAnswerConstraintStatus?: string;
  public suggestedHaleyAnswerInstance?: string;
  public answerConstraintResultMessage?: string;
  public haleyAnswerInstance?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraintResult';
  }

  /**
   * Get property definitions for HaleyAnswerConstraintResult
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerConstraintStatus',
        tsPropertyName: 'haleyAnswerConstraintStatus',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasSuggestedHaleyAnswerInstance',
        tsPropertyName: 'suggestedHaleyAnswerInstance',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAnswerConstraintResultMessage',
        tsPropertyName: 'answerConstraintResultMessage',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerInstance',
        tsPropertyName: 'haleyAnswerInstance',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
