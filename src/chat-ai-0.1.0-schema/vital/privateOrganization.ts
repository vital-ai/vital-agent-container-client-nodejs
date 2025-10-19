import { Organization } from './organization';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#PrivateOrganization
 */
export class PrivateOrganization extends Organization {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital#PrivateOrganization';
  }

  /**
   * Get property definitions for PrivateOrganization
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
