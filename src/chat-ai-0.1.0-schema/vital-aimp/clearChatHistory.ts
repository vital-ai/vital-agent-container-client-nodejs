import { Card } from './card';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ClearChatHistory
 */
export class ClearChatHistory extends Card {
  public clearScope?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#ClearChatHistory';
  }

  /**
   * Get property definitions for ClearChatHistory
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasClearScope',
        tsPropertyName: 'clearScope',
        type: 'string',
        required: false
      }
    ];
  }


}
