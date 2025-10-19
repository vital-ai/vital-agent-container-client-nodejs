import { VITAL_Query } from './vitalQuery';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#VITAL_GraphQuery
 */
export class VITAL_GraphQuery extends VITAL_Query {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-core#VITAL_GraphQuery';
  }

  /**
   * Get property definitions for VITAL_GraphQuery
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
