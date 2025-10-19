import { UserInterfaceCommandMessage } from './userInterfaceCommandMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#NextAudioCommand
 */
export class NextAudioCommand extends UserInterfaceCommandMessage {
  public cardURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#NextAudioCommand';
  }

  /**
   * Get property definitions for NextAudioCommand
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasCardURI',
        tsPropertyName: 'cardURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
