import { LightDevice } from './lightDevice';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#HueLightDevice
 */
export class HueLightDevice extends LightDevice {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#HueLightDevice';
  }

  /**
   * Get property definitions for HueLightDevice
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
