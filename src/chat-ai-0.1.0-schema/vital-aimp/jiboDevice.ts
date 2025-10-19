import { RobotDevice } from './robotDevice';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#JiboDevice
 */
export class JiboDevice extends RobotDevice {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#JiboDevice';
  }

  /**
   * Get property definitions for JiboDevice
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
