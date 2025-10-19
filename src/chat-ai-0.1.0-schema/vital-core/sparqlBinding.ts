import { VITAL_GraphContainerObject } from './vitalGraphcontainerobject';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#SparqlBinding
 */
export class SparqlBinding extends VITAL_GraphContainerObject {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-core#SparqlBinding';
  }

  /**
   * Get property definitions for SparqlBinding
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
