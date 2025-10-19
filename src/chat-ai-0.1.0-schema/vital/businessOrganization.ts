import { Organization } from './organization';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#BusinessOrganization
 */
export class BusinessOrganization extends Organization {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital#BusinessOrganization';
  }

  /**
   * Get property definitions for BusinessOrganization
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
