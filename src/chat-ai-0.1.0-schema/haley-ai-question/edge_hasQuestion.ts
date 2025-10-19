import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#Edge_hasQuestion
 */
export class Edge_hasQuestion extends VITAL_PeerEdge {
  public suppressedQuestion?: boolean;
  public requiredQuestion?: boolean;
  public haleyAnswerConstraintScopeType?: string;
  public rank?: number;
  public haleyAnswerValidationScopeType?: string;
  public highlighted?: boolean;
  public questionIndex?: number;
  public dynamicRequiredQuestion?: boolean;
  public pageNumber?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#Edge_hasQuestion';
  }

  /**
   * Get property definitions for Edge_hasQuestion
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isSuppressedQuestion',
        tsPropertyName: 'suppressedQuestion',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isRequiredQuestion',
        tsPropertyName: 'requiredQuestion',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerConstraintScopeType',
        tsPropertyName: 'haleyAnswerConstraintScopeType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasRank',
        tsPropertyName: 'rank',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerValidationScopeType',
        tsPropertyName: 'haleyAnswerValidationScopeType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isHighlighted',
        tsPropertyName: 'highlighted',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasQuestionIndex',
        tsPropertyName: 'questionIndex',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isDynamicRequiredQuestion',
        tsPropertyName: 'dynamicRequiredQuestion',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasPageNumber',
        tsPropertyName: 'pageNumber',
        type: 'number',
        required: false
      }
    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasQuestion
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley-ai-question#Edge_hasQuestion';
  }
}
