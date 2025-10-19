import { HaleyMessage } from './haleyMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#HaleyCommandMessage
 */
export class HaleyCommandMessage extends HaleyMessage {
  public command?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#HaleyCommandMessage';
  }

  /**
   * Get property definitions for HaleyCommandMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasCommand',
        tsPropertyName: 'command',
        type: 'string',
        required: false
      }
    ];
  }


}
