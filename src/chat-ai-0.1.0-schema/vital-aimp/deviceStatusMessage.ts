import { DeviceMessage } from './deviceMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DeviceStatusMessage
 */
export class DeviceStatusMessage extends DeviceMessage {
  public deviceStatus?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#DeviceStatusMessage';
  }

  /**
   * Get property definitions for DeviceStatusMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDeviceStatus',
        tsPropertyName: 'deviceStatus',
        type: 'string',
        required: false
      }
    ];
  }


}
