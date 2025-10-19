import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyAccountDataShareFilterRule
 */
export class HaleyAccountDataShareFilterRule extends VITAL_Node {
  public accountDataShareFilterRuleIdentifier?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyAccountDataShareFilterRule';
  }

  /**
   * Get property definitions for HaleyAccountDataShareFilterRule
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAccountDataShareFilterRuleIdentifier',
        tsPropertyName: 'accountDataShareFilterRuleIdentifier',
        type: 'string',
        required: false
      }
    ];
  }


}
