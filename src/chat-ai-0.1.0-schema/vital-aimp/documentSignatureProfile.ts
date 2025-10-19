import { EndpointProfile } from './endpointProfile';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DocumentSignatureProfile
 */
export class DocumentSignatureProfile extends EndpointProfile {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#DocumentSignatureProfile';
  }

  /**
   * Get property definitions for DocumentSignatureProfile
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
