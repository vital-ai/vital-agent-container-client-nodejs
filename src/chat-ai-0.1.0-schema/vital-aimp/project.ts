import { AIMPThing } from './aimpthing';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#Project
 */
export class Project extends AIMPThing {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#Project';
  }

  /**
   * Get property definitions for Project
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
