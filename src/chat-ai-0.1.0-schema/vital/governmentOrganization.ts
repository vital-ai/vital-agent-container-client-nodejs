import { Organization } from './organization';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#GovernmentOrganization
 */
export class GovernmentOrganization extends Organization {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital#GovernmentOrganization';
  }

  /**
   * Get property definitions for GovernmentOrganization
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
