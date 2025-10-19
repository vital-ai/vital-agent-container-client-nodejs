import { DeviceMessage } from './deviceMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DeviceActivateMessage
 */
export class DeviceActivateMessage extends DeviceMessage {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#DeviceActivateMessage';
  }

  /**
   * Get property definitions for DeviceActivateMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
