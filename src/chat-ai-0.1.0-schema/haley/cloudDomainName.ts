import { HaleyCloud } from './haleyCloud';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#CloudDomainName
 */
export class CloudDomainName extends HaleyCloud {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#CloudDomainName';
  }

  /**
   * Get property definitions for CloudDomainName
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
