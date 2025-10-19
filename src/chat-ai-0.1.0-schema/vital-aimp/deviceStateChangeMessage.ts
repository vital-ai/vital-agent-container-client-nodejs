import { DeviceMessage } from './deviceMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DeviceStateChangeMessage
 */
export class DeviceStateChangeMessage extends DeviceMessage {
  public deviceOldState?: string;
  public deviceNewState?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#DeviceStateChangeMessage';
  }

  /**
   * Get property definitions for DeviceStateChangeMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDeviceOldState',
        tsPropertyName: 'deviceOldState',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDeviceNewState',
        tsPropertyName: 'deviceNewState',
        type: 'string',
        required: false
      }
    ];
  }


}
