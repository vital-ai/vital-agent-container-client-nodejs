import { VitalAuthKey } from './vitalAuthKey';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#VitalServiceAdminKey
 */
export class VitalServiceAdminKey extends VitalAuthKey {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-core#VitalServiceAdminKey';
  }

  /**
   * Get property definitions for VitalServiceAdminKey
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
