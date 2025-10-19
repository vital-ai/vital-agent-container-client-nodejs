import { AIMPMessageContent } from './aimpmessageContent';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#UserMessageContent
 */
export class UserMessageContent extends AIMPMessageContent {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#UserMessageContent';
  }

  /**
   * Get property definitions for UserMessageContent
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
