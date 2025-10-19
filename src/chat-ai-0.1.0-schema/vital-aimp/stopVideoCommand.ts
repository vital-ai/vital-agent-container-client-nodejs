import { UserInterfaceCommandMessage } from './userInterfaceCommandMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#StopVideoCommand
 */
export class StopVideoCommand extends UserInterfaceCommandMessage {
  public cardURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#StopVideoCommand';
  }

  /**
   * Get property definitions for StopVideoCommand
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
