import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyMindQuery
 */
export class HaleyMindQuery extends VITAL_Node {
  public haleyMindAppURI?: string;
  public queryToRuleURI?: string;
  public haleyMindQueryParameters?: string[];
  public haleyMindQueryErrorCode?: number;
  public haleyMindQueryErrorMessage?: string;
  public haleyMindInferenceQuery?: string;
  public haleyMindQueryModule?: string;
  public haleyMindQueryStatusURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyMindQuery';
  }

  /**
   * Get property definitions for HaleyMindQuery
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyMindAppURI',
        tsPropertyName: 'haleyMindAppURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasQueryToRuleURI',
        tsPropertyName: 'queryToRuleURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyMindQueryParameters',
        tsPropertyName: 'haleyMindQueryParameters',
        type: 'string[]',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyMindQueryErrorCode',
        tsPropertyName: 'haleyMindQueryErrorCode',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyMindQueryErrorMessage',
        tsPropertyName: 'haleyMindQueryErrorMessage',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyMindInferenceQuery',
        tsPropertyName: 'haleyMindInferenceQuery',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyMindQueryModule',
        tsPropertyName: 'haleyMindQueryModule',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyMindQueryStatusURI',
        tsPropertyName: 'haleyMindQueryStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
