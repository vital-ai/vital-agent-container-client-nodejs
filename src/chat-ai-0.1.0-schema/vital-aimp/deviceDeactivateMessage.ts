import { DeviceMessage } from './deviceMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DeviceDeactivateMessage
 */
export class DeviceDeactivateMessage extends DeviceMessage {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#DeviceDeactivateMessage';
  }

  /**
   * Get property definitions for DeviceDeactivateMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
