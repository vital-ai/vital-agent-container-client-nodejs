import { Login } from '../vital/login';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#APILogin
 */
export class APILogin extends Login {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#APILogin';
  }

  /**
   * Get property definitions for APILogin
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
