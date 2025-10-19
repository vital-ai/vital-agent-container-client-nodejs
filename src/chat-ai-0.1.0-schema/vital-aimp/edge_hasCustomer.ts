import { Edge_hasBusinessRelationshipWith } from './edge_hasBusinessRelationshipWith';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#Edge_hasCustomer
 */
export class Edge_hasCustomer extends Edge_hasBusinessRelationshipWith {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#Edge_hasCustomer';
  }

  /**
   * Get property definitions for Edge_hasCustomer
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasCustomer
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-aimp#Edge_hasCustomer';
  }
}
