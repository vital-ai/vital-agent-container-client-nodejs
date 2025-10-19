import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyMindRuleInvocation
 */
export class HaleyMindRuleInvocation extends VITAL_Node {
  public invocationToRuleURI?: string;
  public invocationGraphDataManagementTypeURI?: string;
  public haleyMindAppURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyMindRuleInvocation';
  }

  /**
   * Get property definitions for HaleyMindRuleInvocation
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasInvocationToRuleURI',
        tsPropertyName: 'invocationToRuleURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasInvocationGraphDataManagementTypeURI',
        tsPropertyName: 'invocationGraphDataManagementTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyMindAppURI',
        tsPropertyName: 'haleyMindAppURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
