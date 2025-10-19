import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyGroupInstanceSummary
 */
export class HaleyGroupInstanceSummary extends VITAL_Node {
  public haleyGroupInstanceStatus?: string;
  public numberOfAnsweredPendingQuestions?: number;
  public numberOfQuestions?: number;
  public numberOfRequiredQuestions?: number;
  public numberOfAnsweredRequiredQuestions?: number;
  public numberOfPendingQuestions?: number;
  public numberOfAnsweredInvalidQuestions?: number;
  public numberOfAnsweredQuestions?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyGroupInstanceSummary';
  }

  /**
   * Get property definitions for HaleyGroupInstanceSummary
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyGroupInstanceStatus',
        tsPropertyName: 'haleyGroupInstanceStatus',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasNumberOfAnsweredPendingQuestions',
        tsPropertyName: 'numberOfAnsweredPendingQuestions',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasNumberOfQuestions',
        tsPropertyName: 'numberOfQuestions',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasNumberOfRequiredQuestions',
        tsPropertyName: 'numberOfRequiredQuestions',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasNumberOfAnsweredRequiredQuestions',
        tsPropertyName: 'numberOfAnsweredRequiredQuestions',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasNumberOfPendingQuestions',
        tsPropertyName: 'numberOfPendingQuestions',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasNumberOfAnsweredInvalidQuestions',
        tsPropertyName: 'numberOfAnsweredInvalidQuestions',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasNumberOfAnsweredQuestions',
        tsPropertyName: 'numberOfAnsweredQuestions',
        type: 'number',
        required: false
      }
    ];
  }


}
