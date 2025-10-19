import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyMindQueryAnswer
 */
export class HaleyMindQueryAnswer extends VITAL_Node {
  public haleyMindQueryAnswerResult?: boolean;
  public answerToRuleURI?: string;
  public haleyMindAnswerDerivationTree?: string;
  public haleyMindAnswerExplanation?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyMindQueryAnswer';
  }

  /**
   * Get property definitions for HaleyMindQueryAnswer
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyMindQueryAnswerResult',
        tsPropertyName: 'haleyMindQueryAnswerResult',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAnswerToRuleURI',
        tsPropertyName: 'answerToRuleURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyMindAnswerDerivationTree',
        tsPropertyName: 'haleyMindAnswerDerivationTree',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyMindAnswerExplanation',
        tsPropertyName: 'haleyMindAnswerExplanation',
        type: 'string',
        required: false
      }
    ];
  }


}
