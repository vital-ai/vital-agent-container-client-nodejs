import { DeviceMessage } from './deviceMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DeviceMotionMessage
 */
export class DeviceMotionMessage extends DeviceMessage {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#DeviceMotionMessage';
  }

  /**
   * Get property definitions for DeviceMotionMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
