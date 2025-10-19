import { AIMPDevice } from './aimpdevice';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#SwitchDevice
 */
export class SwitchDevice extends AIMPDevice {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#SwitchDevice';
  }

  /**
   * Get property definitions for SwitchDevice
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
