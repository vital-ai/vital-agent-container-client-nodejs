import { UserInterfaceCommandMessage } from './userInterfaceCommandMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#PlayAudioCommand
 */
export class PlayAudioCommand extends UserInterfaceCommandMessage {
  public cardURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#PlayAudioCommand';
  }

  /**
   * Get property definitions for PlayAudioCommand
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
