import { HaleyAccount } from './haleyAccount';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#Seller
 */
export class Seller extends HaleyAccount {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#Seller';
  }

  /**
   * Get property definitions for Seller
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
