import { VITAL_GraphContainerObject } from './vitalGraphcontainerobject';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#GraphMatch
 */
export class GraphMatch extends VITAL_GraphContainerObject {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-core#GraphMatch';
  }

  /**
   * Get property definitions for GraphMatch
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
