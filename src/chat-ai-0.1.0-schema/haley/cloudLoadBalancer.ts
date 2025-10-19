import { HaleyCloud } from './haleyCloud';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#CloudLoadBalancer
 */
export class CloudLoadBalancer extends HaleyCloud {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#CloudLoadBalancer';
  }

  /**
   * Get property definitions for CloudLoadBalancer
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
