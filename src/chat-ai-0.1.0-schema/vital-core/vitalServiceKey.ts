import { VitalAuthKey } from './vitalAuthKey';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#VitalServiceKey
 */
export class VitalServiceKey extends VitalAuthKey {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-core#VitalServiceKey';
  }

  /**
   * Get property definitions for VitalServiceKey
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
