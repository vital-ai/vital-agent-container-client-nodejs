import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyMindRule
 */
export class HaleyMindRule extends VITAL_Node {
  public graphResolveTypeURI?: string;
  public ruleMethod?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyMindRule';
  }

  /**
   * Get property definitions for HaleyMindRule
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasGraphResolveTypeURI',
        tsPropertyName: 'graphResolveTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRuleMethod',
        tsPropertyName: 'ruleMethod',
        type: 'string',
        required: false
      }
    ];
  }


}
