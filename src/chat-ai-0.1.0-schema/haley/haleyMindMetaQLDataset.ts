import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyMindMetaQLDataset
 */
export class HaleyMindMetaQLDataset extends VITAL_Node {
  public ruleMetaQLTimestamp?: string | Date;
  public ruleMetaQLQueryName?: string;
  public ruleMetaQLParameterMap?: string;
  public ruleMetaQLObjectCount?: number;
  public ruleInvocationURI?: string;
  public ruleURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyMindMetaQLDataset';
  }

  /**
   * Get property definitions for HaleyMindMetaQLDataset
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRuleMetaQLTimestamp',
        tsPropertyName: 'ruleMetaQLTimestamp',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRuleMetaQLQueryName',
        tsPropertyName: 'ruleMetaQLQueryName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRuleMetaQLParameterMap',
        tsPropertyName: 'ruleMetaQLParameterMap',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRuleMetaQLObjectCount',
        tsPropertyName: 'ruleMetaQLObjectCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRuleInvocationURI',
        tsPropertyName: 'ruleInvocationURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRuleURI',
        tsPropertyName: 'ruleURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
