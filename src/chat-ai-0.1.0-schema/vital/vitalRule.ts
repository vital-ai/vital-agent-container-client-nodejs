import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#VitalRule
 */
export class VitalRule extends VITAL_Node {
  public ruleSet?: string;
  public ruleBody?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital#VitalRule';
  }

  /**
   * Get property definitions for VitalRule
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasRuleSet',
        tsPropertyName: 'ruleSet',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasRuleBody',
        tsPropertyName: 'ruleBody',
        type: 'string',
        required: false
      }
    ];
  }


}
