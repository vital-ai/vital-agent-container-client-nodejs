import { CredentialsLogin } from './credentialsLogin';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#AdminLogin
 */
export class AdminLogin extends CredentialsLogin {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital#AdminLogin';
  }

  /**
   * Get property definitions for AdminLogin
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
