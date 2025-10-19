import { ChatRuleSet } from './chatRuleSet';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ManagedChatRuleSet
 */
export class ManagedChatRuleSet extends ChatRuleSet {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#ManagedChatRuleSet';
  }

  /**
   * Get property definitions for ManagedChatRuleSet
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
