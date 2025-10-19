import { VitalOntObject } from './vitalOntObject';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#VitalOntEdge
 */
export class VitalOntEdge extends VitalOntObject {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital#VitalOntEdge';
  }

  /**
   * Get property definitions for VitalOntEdge
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
