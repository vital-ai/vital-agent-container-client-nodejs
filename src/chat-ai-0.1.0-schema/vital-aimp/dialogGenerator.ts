import { DialogElement } from './dialogElement';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DialogGenerator
 */
export class DialogGenerator extends DialogElement {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#DialogGenerator';
  }

  /**
   * Get property definitions for DialogGenerator
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
