import { SmartDevice } from './smartDevice';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AlexaDevice
 */
export class AlexaDevice extends SmartDevice {
  public alexaUserID?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#AlexaDevice';
  }

  /**
   * Get property definitions for AlexaDevice
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAlexaUserID',
        tsPropertyName: 'alexaUserID',
        type: 'string',
        required: false
      }
    ];
  }


}
