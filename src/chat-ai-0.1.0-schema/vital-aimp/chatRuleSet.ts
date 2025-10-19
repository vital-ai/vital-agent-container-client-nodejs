import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ChatRuleSet
 */
export class ChatRuleSet extends VITAL_Node {
  public globalChatRuleSet?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#ChatRuleSet';
  }

  /**
   * Get property definitions for ChatRuleSet
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isGlobalChatRuleSet',
        tsPropertyName: 'globalChatRuleSet',
        type: 'boolean',
        required: false
      }
    ];
  }


}
