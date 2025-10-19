import { Login } from '../vital/login';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DocumentSignatureLogin
 */
export class DocumentSignatureLogin extends Login {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#DocumentSignatureLogin';
  }

  /**
   * Get property definitions for DocumentSignatureLogin
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
