import { ChatRuleSet } from './chatRuleSet';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#FileChatRuleSet
 */
export class FileChatRuleSet extends ChatRuleSet {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#FileChatRuleSet';
  }

  /**
   * Get property definitions for FileChatRuleSet
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
