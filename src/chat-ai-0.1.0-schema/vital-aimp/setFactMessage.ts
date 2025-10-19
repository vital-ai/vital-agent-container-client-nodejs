import { CommandMessage } from './commandMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#SetFactMessage
 */
export class SetFactMessage extends CommandMessage {
  public factScope?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#SetFactMessage';
  }

  /**
   * Get property definitions for SetFactMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasFactScope',
        tsPropertyName: 'factScope',
        type: 'string',
        required: false
      }
    ];
  }


}
