import { AIMPMessage } from './aimpmessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#PauseMessage
 */
export class PauseMessage extends AIMPMessage {
  public durationSeconds?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#PauseMessage';
  }

  /**
   * Get property definitions for PauseMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDurationSeconds',
        tsPropertyName: 'durationSeconds',
        type: 'number',
        required: false,
        format: 'double'
      }
    ];
  }


}
