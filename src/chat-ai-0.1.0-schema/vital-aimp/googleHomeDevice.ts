import { SmartDevice } from './smartDevice';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#GoogleHomeDevice
 */
export class GoogleHomeDevice extends SmartDevice {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#GoogleHomeDevice';
  }

  /**
   * Get property definitions for GoogleHomeDevice
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
