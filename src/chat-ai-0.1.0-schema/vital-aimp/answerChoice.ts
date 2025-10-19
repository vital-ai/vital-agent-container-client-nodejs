import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AnswerChoice
 */
export class AnswerChoice extends VITAL_Node {
  public answerSkipped?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#AnswerChoice';
  }

  /**
   * Get property definitions for AnswerChoice
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isAnswerSkipped',
        tsPropertyName: 'answerSkipped',
        type: 'boolean',
        required: false
      }
    ];
  }


}
