import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyMindRuleParameter
 */
export class HaleyMindRuleParameter extends VITAL_Node {
  public ruleParameterName?: string;
  public ruleParameterTypeURI?: string;
  public ruleParameterResolveObjectGraph?: boolean;
  public ruleParameterResolveObjectList?: boolean;
  public ruleParameterIndex?: number;
  public ruleParameterModeURI?: string;
  public ruleParameterResolveObject?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyMindRuleParameter';
  }

  /**
   * Get property definitions for HaleyMindRuleParameter
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRuleParameterName',
        tsPropertyName: 'ruleParameterName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRuleParameterTypeURI',
        tsPropertyName: 'ruleParameterTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRuleParameterResolveObjectGraph',
        tsPropertyName: 'ruleParameterResolveObjectGraph',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRuleParameterResolveObjectList',
        tsPropertyName: 'ruleParameterResolveObjectList',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRuleParameterIndex',
        tsPropertyName: 'ruleParameterIndex',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRuleParameterModeURI',
        tsPropertyName: 'ruleParameterModeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRuleParameterResolveObject',
        tsPropertyName: 'ruleParameterResolveObject',
        type: 'boolean',
        required: false
      }
    ];
  }


}
