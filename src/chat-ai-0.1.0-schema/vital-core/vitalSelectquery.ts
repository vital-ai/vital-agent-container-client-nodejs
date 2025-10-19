import { VITAL_Query } from './vitalQuery';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#VITAL_SelectQuery
 */
export class VITAL_SelectQuery extends VITAL_Query {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-core#VITAL_SelectQuery';
  }

  /**
   * Get property definitions for VITAL_SelectQuery
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
