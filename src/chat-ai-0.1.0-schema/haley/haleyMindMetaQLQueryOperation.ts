import { HaleyMindOperation } from './haleyMindOperation';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyMindMetaQLQueryOperation
 */
export class HaleyMindMetaQLQueryOperation extends HaleyMindOperation {
  public ruleMetaQLQueryName?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyMindMetaQLQueryOperation';
  }

  /**
   * Get property definitions for HaleyMindMetaQLQueryOperation
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRuleMetaQLQueryName',
        tsPropertyName: 'ruleMetaQLQueryName',
        type: 'string',
        required: false
      }
    ];
  }


}
