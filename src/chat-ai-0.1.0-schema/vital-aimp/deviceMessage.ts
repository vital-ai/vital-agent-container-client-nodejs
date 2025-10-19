import { AIMPMessage } from './aimpmessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DeviceMessage
 */
export class DeviceMessage extends AIMPMessage {
  public deviceName?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#DeviceMessage';
  }

  /**
   * Get property definitions for DeviceMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDeviceName',
        tsPropertyName: 'deviceName',
        type: 'string',
        required: false
      }
    ];
  }


}
