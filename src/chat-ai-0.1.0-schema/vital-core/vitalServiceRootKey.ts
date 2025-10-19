import { VitalAuthKey } from './vitalAuthKey';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#VitalServiceRootKey
 */
export class VitalServiceRootKey extends VitalAuthKey {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-core#VitalServiceRootKey';
  }

  /**
   * Get property definitions for VitalServiceRootKey
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
