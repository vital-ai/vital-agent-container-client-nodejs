import { AIMPThing } from './aimpthing';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#Folder
 */
export class Folder extends AIMPThing {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#Folder';
  }

  /**
   * Get property definitions for Folder
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
