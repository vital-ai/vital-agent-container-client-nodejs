import { DeviceMessage } from './deviceMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DeviceSettingMessage
 */
export class DeviceSettingMessage extends DeviceMessage {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#DeviceSettingMessage';
  }

  /**
   * Get property definitions for DeviceSettingMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
