import { AIMPMessage } from './aimpmessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#CommandMessage
 */
export class CommandMessage extends AIMPMessage {
  public command?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#CommandMessage';
  }

  /**
   * Get property definitions for CommandMessage
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
